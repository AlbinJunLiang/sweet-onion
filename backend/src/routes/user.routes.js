import { Router } from "express";
import { createUser, getUsers, registerUser, updateUser } from "../controllers/user.controller.js";
import { initRateLimit } from "../middlewares/rate-limit-middleware.js";
import { userUpdateValidationRules, userValidationRules } from "../validators/user.validator.js";
import verifyToken from "../middlewares/firebase-auth-middleware.js";
import { validateRequest } from "../middlewares/bad-request-middleware.js";
import { deleteUserChats, getByUserWithCursor } from "../controllers/chat.controller.js";
import { allowOnlyEmails, verifyEmailVerified } from "../middlewares/email-verified-middleware.js";
import { authorizeUserResource } from "../middlewares/authorize-user-middleware.js";
import { paginationValidationRules } from "../validators/pagination--validator.js";

const router = Router();

/**
 * @openapi
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *       description: Introduce tu ID Token de Firebase para autenticarte.
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         _id:
 *           type: string
 *           description: Identificador único generado automáticamente por el servidor.
 *           readOnly: true
 *           example: "60d0fe4f5311236168a109ca"
 *         name:
 *           type: string
 *           minLength: 3
 *           maxLength: 50
 *           example: "Juan Pérez"
 *         email:
 *           type: string
 *           format: email
 *           example: "juan.perez@example.com"
 *         status:
 *           type: string
 *           enum: [active, inactive, verified]
 *           description: Estado actual del usuario en el sistema.
 *           example: "active"
 *         role:
 *           type: string
 *           example: "user"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           readOnly: true
 */

/**
 * @openapi
 * /api/users:
 *   get:
 *     summary: Obtiene la lista de todos los usuarios
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       401:
 *         description: No autorizado. El token falta o es inválido.
 *       500:
 *         description: Error interno del servidor.
 */
router.get("/",
    paginationValidationRules,
    validateRequest,
    verifyToken,
    verifyEmailVerified,
    allowOnlyEmails,
    getUsers);

/**
 * @openapi
 * /api/users:
 *   post:
 *     summary: Crea un nuevo usuario de manera manual (Panel de administración)
 *     description: Registra un usuario validando que el correo sea único y cumpla con las reglas locales.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente. Retorna el objeto con su ID generado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Error de validación en los datos enviados.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       msg:
 *                         type: string
 *                         example: "Name must be at least 3 characters long."
 *                       param:
 *                         type: string
 *                         example: "name"
 *                       location:
 *                         type: string
 *                         example: "body"
 *       409:
 *         description: Conflicto. El correo ya está registrado en la base de datos.
 *       500:
 *         description: Error interno al procesar la solicitud en el servidor.
 */
router.post("/",
    initRateLimit(50, 20),
    verifyToken,
    allowOnlyEmails,
    userValidationRules,
    validateRequest,
    createUser
);

/**
 * @openapi
 * /api/users/auth:
 *   post:
 *     summary: Sincroniza y autentica un usuario mediante Firebase Auth
 *     description: |
 *       Verifica el token de Firebase enviado en las cabeceras.
 *       Si el usuario no existe en MongoDB, lo registra automáticamente como 'active' o 'verified'.
 *       Si ya existe pero su estado en Firebase cambió a verificado, actualiza su estado en MongoDB.
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Usuario existente autenticado y sincronizado con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Usuario autenticado y sincronizado con éxito."
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *       201:
 *         description: Primer inicio de sesión. Usuario registrado automáticamente en MongoDB.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Usuario nuevo detectado. Registrando en MongoDB..."
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *       401:
 *         description: No autorizado. No se proporcionó el token en la cabecera.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Token no proporcionado."
 *       403:
 *         description: Prohibido. El token de Firebase expiró o la cuenta está inactiva en MongoDB.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Esta cuenta se encuentra inactiva en el sistema."
 *       500:
 *         description: Error interno del servidor.
 */
router.post("/auth",
    initRateLimit(10, 1000),
    registerUser);


/**
 * @swagger
 * /api/users/{userId}/chats:
 *   delete:
 *     summary: Delete user chats with optional filters
 *     description: |
 *       Delete chats from a specific user. You can apply optional filters:
 *       - Filter by chat type
 *       - Filter by status
 *       - Delete chats older than X days
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *           pattern: ^[0-9a-fA-F]{24}$
 *         description: MongoDB ObjectId of the user
 *         example: 507f1f77bcf86cd799439011
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *           enum: [conversation, interview, ephimeral]
 *         description: Filter by chat type
 *         example: interview
 *       - in: query
 *         name: status
 *         schema:
 *           type: boolean
 *         description: Filter by status (true = active, false = inactive)
 *         example: false
 *       - in: query
 *         name: olderThan
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: Delete chats older than X days
 *         example: 30
 *     responses:
 *       200:
 *         description: Chats successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Successfully deleted 5 chat(s)
 *                 deletedCount:
 *                   type: integer
 *                   example: 5
 *                 filters:
 *                   type: object
 *                   properties:
 *                     type:
 *                       type: string
 *                     status:
 *                       type: boolean
 *                     olderThan:
 *                       type: integer
 *       400:
 *         description: Invalid filter parameters
 *       500:
 *         description: Server error
 */
router.delete('/:userId/chats',
    initRateLimit(60, 1000),
    verifyToken,
    verifyEmailVerified,
    authorizeUserResource('user', 'userId'),
    deleteUserChats);


/**
 * @openapi
 * /api/users/{userId}/chats:
 *   get:
 *     summary: Obtener chats de un usuario con paginación por cursor
 *     description: >
 *       Retorna una lista paginada de chats pertenecientes a un usuario,
 *       ordenados del más reciente al más antiguo usando cursor pagination.
 *       Requiere un token de autenticación válido de Firebase.
 *     tags:
 *       - Users
 *     
 *     # SECCIÓN DE SEGURIDAD: Define que esta ruta ocupa el Bearer Token
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: ID del usuario (ObjectId de MongoDB).
 *         schema:
 *           type: string
 *           example: "6a0d7261cb936a7838a51070"
 *
 *       - name: cursor
 *         in: query
 *         required: false
 *         description: >
 *           Cursor basado en el _id del último chat recibido.
 *           Se utiliza para obtener la siguiente página.
 *         schema:
 *           type: string
 *           example: "6851c72e9d8f2b6c4d1a8f11"
 *
 *       - name: limit
 *         in: query
 *         required: false
 *         description: Cantidad máxima de chats por página.
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 50
 *           default: 10
 *           example: 10
 * 
 *       - name: type
 *         in: query
 *         required: false
 *         description: Tipos de chats (conversations or interviews).
 *         schema:
 *           type: string
 *           default: interview
 *           example: interview
 * 
 *
 *     responses:
 *       200:
 *         description: Chats recuperados correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "664bdf192bc31a4a1c5d9012"
 *                       creatorId:
 *                         type: string
 *                         example: "6a0d7261cb936a7838a51070"
 *                       title:
 *                         type: string
 *                         example: "Práctica de Diálogo en Ruso"
 *                       context:
 *                         type: string
 *                         example: "Discusión sobre vocabulario de aeropuertos."
 *                       type:
 *                         type: string
 *                         example: "conversation"
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     nextCursor:
 *                       type: string
 *                       nullable: true
 *                       example: "6851c72e9d8f2b6c4d1a8f11"
 *                     hasMore:
 *                       type: boolean
 *                       example: true
 *                     limit:
 *                       type: integer
 *                       example: 10
 *       401:
 *         description: Token ausente, inválido o expirado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Unauthorized. Email missing in token."
 *       400:
 *         description: ID o cursor inválido.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid cursor format."
 *       403:
 *         description: Usuario no autorizado para acceder a estos chats (el ID de la URL no coincide con el token).
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Access Denied. You do not have permission to access this user's resources."
 *       404:
 *         description: Usuario no encontrado en la base de datos local.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "User not found."
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Internal server error."
 */
router.get("/:userId/chats",
    verifyToken,
    verifyEmailVerified,
    authorizeUserResource('user', 'userId'),
    getByUserWithCursor);



/**
* @swagger
* /api/users/{id}:
*   put:
*     summary: Update a user
*     tags: [Users]
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: User ID
*         schema:
*           type: string
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               name:
*                 type: string
*                 example: Luis Alberto
*               role:
*                 type: string
*                 example: admin
*               status:
*                 type: string
*                 enum: [registered, inactive, verified]
*                 example: registered
*               authId:
*                 type: string
*             additionalProperties: false
*     responses:
*       200:
*         description: User updated successfully
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/User'
*       400:
*         description: Error updating user
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 message:
*                   type: string
*                   example: Error updating user.
*                 error:
*                   type: string
*       404:
*         description: User not found
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 message:
*                   type: string
*                   example: User not found.
*/


router.put("/:id",
    verifyToken,
    verifyEmailVerified,
    allowOnlyEmails,
    userUpdateValidationRules,
    validateRequest,
    updateUser);
export default router;