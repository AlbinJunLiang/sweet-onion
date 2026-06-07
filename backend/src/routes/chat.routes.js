import { Router } from "express";
import { deleteChat, getChatById } from "../controllers/chat.controller.js";
import verifyToken from "../middlewares/firebase-auth-middleware.js";
import { authorizeUserResource } from "../middlewares/authorize-user-middleware.js";
import { verifyEmailVerified } from "../middlewares/email-verified-middleware.js";
import { initRateLimit } from "../middlewares/rate-limit-middleware.js";
import { getMessagesByUser } from "../controllers/message.controller.js"

const router = Router();

/**
 * @openapi
 * /api/chats/{chatId}:
 *   delete:
 *     summary: Eliminar un chat específico y sus componentes dependientes
 *     description: Elimina un chat asegurando que solo el creador del mismo pueda realizar la acción.
 *     tags:
 *       - Chats
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: chatId
 *         in: path
 *         required: true
 *         description: ID del chat.
 *         schema:
 *           type: string
 *           example: "664bdf192bc31a4a1c5d9012"
 *
 *       - name: userId
 *         in: path
 *         required: true
 *         description: ID del usuario propietario del chat.
 *         schema:
 *           type: string
 *           example: "664bdf192bc31a4a1c5d9555"
 *
 *     responses:
 *       200:
 *         description: Chat eliminado correctamente.
 *       400:
 *         description: Parámetros inválidos.
 *       401:
 *         description: Token ausente o inválido.
 *       403:
 *         description: No tienes permisos para borrar este chat.
 *       404:
 *         description: El chat no existe.
 *       500:
 *         description: Error interno del servidor.
 */

router.delete(
    "/:chatId",
    verifyToken,
    verifyEmailVerified,
    authorizeUserResource('chat', 'chatId'),
    deleteChat
);

/**
 * @openapi
 * /api/chats/{chatId}:
 *   get:
 *     summary: Obtener un chat específico por su ID
 *     tags:
 *       - Chats
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: chatId
 *         required: true
 *         description: El ID único del chat a recuperar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Chat encontrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 creatorId:
 *                   type: string
 *                 messages:
 *                   type: array
 *                   items:
 *                     type: object
 *       400:
 *         description: Formato de ID inválido
 *       404:
 *         description: Chat no encontrado
 *       500:
 *         description: Error interno del servidor
 */

router.get('/:chatId',
    verifyToken,
    verifyEmailVerified,
    authorizeUserResource('chat', 'chatId'),
    getChatById);

/**
 * @openapi
 * /api/chats/{chatId}/messages:
 *   get:
 *     summary: Obtener mensajes de un chat filtrado por usuario
 *     description: Recupera todos los mensajes de un chat verificando que pertenezca al userId enviado en la consulta.
 *     tags:
 *       - Chats
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: chatId
 *         in: path
 *         required: true
 *         description: ID único del chat (ObjectId de MongoDB).
 *         schema:
 *           type: string
 *           example: "664bdf192bc31a4a1c5d9012"
 *     responses:
 *       200:
 *         description: Historial de mensajes devuelto con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Message'  # 🟢 CORREGIDO: En singular para que coincida con tu componente base
 *       400:
 *         description: El formato de ID es inválidos.
 *       404:
 *         description: Chat no encontrado o denegado por falta de permisos.
 *       500:
 *         description: Error interno del servidor.
 */

router.get("/:chatId/messages",
    initRateLimit(60, 1000),
    verifyToken,
    verifyEmailVerified,
    authorizeUserResource('chat', 'chatId'),
    getMessagesByUser);

export default router;