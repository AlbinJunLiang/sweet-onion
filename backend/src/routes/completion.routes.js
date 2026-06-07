
import { Router } from "express";
import { initCompletionTest, generateChatResponseCompletion, generateTemporaryResponseCompletion, initCompletionChat, InitInterviewTest, evaluateInterviewAnswer } from "../controllers/completion.controller.js";
import { initRateLimit, rateLimitWithExclusions } from "../middlewares/rate-limit-middleware.js";
import { completionValidationRules } from "../validators/completion.validator.js";
import { validateRequest } from "../middlewares/bad-request-middleware.js";
import { evaluateAnswerInstruction } from "../completions/instructions/evaluate-answer-instruction.js";
import { allowOnlyEmails } from "../middlewares/email-verified-middleware.js";
import verifyToken from "../middlewares/firebase-auth-middleware.js";
import { userIdValidation } from "../validators/user-id-validation.js";

const router = Router();

/**
 * @swagger
 * /api/completions/{provider}:
 *   post:
 *     summary: Genera una respuesta de IA usando un proveedor específico
 *     tags: [Completions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: provider
 *         required: true
 *         schema:
 *           type: string
 *           enum: [google, openrouter, groq, nvidia, huggingface, cerebras]
 *         description: El nombre del proveedor de IA (ej. openai, google)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - content
 *             properties:
 *               content:
 *                 type: string
 *                 example: "¿Qué modelo de LLM estoy usando?"
 *     responses:
 *       200:
 *         description: Respuesta generada exitosamente
 *       400:
 *         description: Proveedor no soportado o falta contenido
 *       500:
 *         description: Error en el servidor
 */

router.post(
    "/:provider",
    initRateLimit(3600, 1),
    allowOnlyEmails,
    completionValidationRules,
    validateRequest,
    initCompletionTest
);

/**
 * @swagger
 * /api/completions/temp/{provider}:
 *   post:
 *     summary: Genera una respuesta temporal usando un proveedor específico
 *     tags: [Completions]
 *     parameters:
 *       - in: path
 *         name: provider
 *         required: true
 *         schema:
 *           type: string
 *           enum:
 *             - google
 *             - openrouter
 *             - groq
 *             - nvidia
 *             - huggingface
 *             - cerebras
 *         description: Nombre del proveedor de IA
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - content
 *             properties:
 *               content:
 *                 type: string
 *                 example: "¿Qué modelo de LLM estoy usando?"
 *               model:
 *                 type: string
 *                 example: "llama-3.1-70b"
 *               language:
 *                 type: string
 *                 example: "es"
 *               context:
 *                 type: string
 *                 example: "Eres un asistente útil."
 *     responses:
 *       200:
 *         description: Respuesta generada exitosamente
 *       400:
 *         description: Falta contenido o proveedor inválido
 *       500:
 *         description: Error interno del servidor
 */

router.post(
    "/temp/:provider",
    rateLimitWithExclusions(1400, 10),
    completionValidationRules,
    validateRequest,
    generateTemporaryResponseCompletion
);


/**
 * @swagger
 * /api/completions/chat/init/{provider}:
 *   post:
 *     summary: Genera una respuesta de IA usando un proveedor específico
 *     tags: [Completions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: provider
 *         required: true
 *         schema:
 *           type: string
 *           enum: [google, openrouter, groq, nvidia, huggingface, cerebras]
 *         description: El nombre del proveedor de IA (ej. openai, google)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - content
 *               - system
 *               - language
 *               - userId
 *             properties:
 *               content:
 *                 type: string
 *                 example: "¿Qué modelo de LLM estoy usando?"
 *               system:
 *                  type: boolean
 *                  example: true
 *               language:
 *                  type: string
 *                  example: "ESPAÑOL"
 *               model:
 *                  type: string
 *                  example: null
 *               userId:
 *                  type: string
 *                  example: 5665565656
 *
 *     responses:
 *       200:
 *         description: Respuesta generada exitosamente
 *       400:
 *         description: Proveedor no soportado o falta contenido
 *       500:
 *         description: Error en el servidor
 */
router.post("/chat/:provider/init",
    verifyToken,
    rateLimitWithExclusions(1400, 10),
    userIdValidation,
    completionValidationRules,
    validateRequest,
    initCompletionChat);



/**
 * @swagger
 * /api/completions/chat/{provider}:
 *   post:
 *     summary: Genera una respuesta de chat y guarda el historial
 *     tags: [Completions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: provider
 *         required: true
 *         schema:
 *           type: string
 *           enum: [google, openrouter, groq, nvidia, huggingface, cerebras]
 *         description: El proveedor del modelo (ej. openai, anthropic)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - content
 *               - chatId
 *               - userId
 *             properties:
 *               content:
 *                 type: string
 *                 description: El mensaje enviado por el usuario
 *               chatId:
 *                 type: string
 *                 description: ID único de la sesión de chat
 *               userId:
 *                 type: string
 *                 description: ID único del usuario
 *               model:
 *                 type: string
 *                 description: Nombre del modelo a utilizar
 *               language:
 *                 type: string
 *                 description: Idioma de la respuesta
 *               context:
 *                 type: string
 *                 description: Contexto adicional para el modelo
 *     responses:
 *       200:
 *         description: Respuesta generada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 provider:
 *                   type: string
 *                 result:
 *                   type: string
 *       400:
 *         description: Error de validación (campos faltantes)
 *       404:
 *         description: Chat no encontrado
 *       500:
 *         description: Error interno del servidor
 */

router.post(
    '/chat/:provider',
    verifyToken,
    rateLimitWithExclusions(1400, 10),
    userIdValidation,
    completionValidationRules,
    validateRequest,
    generateChatResponseCompletion
);



/**
 * @swagger
 * /api/completions/interview/init/{provider}:
 *   post:
 *     summary: Generate and save an AI interview
 *     tags: [Completions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: provider
 *         required: true
 *         schema:
 *           type: string
 *           enum: [google, openrouter, groq, nvidia, huggingface, cerebras]
 *         description: AI provider name
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - content
 *               - userId
 *             properties:
 *
 *               content:
 *                 type: string
 *                 example: "Frontend React developer interview"
 *
 *               language:
 *                 type: string
 *                 example: "Spanish"
 *
 *               userId:
 *                 type: string
 *                 example: "689f5d2a4f7b2c0012aa1122"
 *                  
 *               model:
 *                 type: string
 *                 example: 'GPT-03'
 *
 *     responses:
 *
 *       200:
 *         description: Interview generated and saved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *
 *                 provider:
 *                   type: string
 *                   example: "groq"
 *
 *                 result:
 *                   type: object
 *                   properties:
 *
 *                     chat:
 *                       type: object
 *                       properties:
 *
 *                         _id:
 *                           type: string
 *
 *                         creatorId:
 *                           type: string
 *
 *                         title:
 *                           type: string
 *
 *                         context:
 *                           type: string
 *
 *                         type:
 *                           type: string
 *                           example: "interview"
 *
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
 *
 *                     questions:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *
 *                           _id:
 *                             type: string
 *
 *                           chatId:
 *                             type: string
 *
 *                           order:
 *                             type: integer
 *
 *                           question:
 *                             type: string
 *
 *       400:
 *         description: Validation error or invalid request
 *
 *       500:
 *         description: Internal server error
 */


router.post("/interview/:provider/init",
    verifyToken,
    rateLimitWithExclusions(1400, 10),
    userIdValidation,
    completionValidationRules,
    validateRequest,
    InitInterviewTest);


/**
 * @swagger
 * /api/completions/interview/evaluate/{provider}:
 *   post:
 *     summary: Genera una respuesta de chat y guarda el historial
 *     tags: [Completions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: provider
 *         required: true
 *         schema:
 *           type: string
 *           enum: [google, openrouter, groq, nvidia, huggingface, cerebras]
 *         description: El proveedor del modelo (ej. openai, anthropic)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - content
 *               - chatId
 *               - userId
 *             properties:
 *               content:
 *                 type: string
 *                 description: El mensaje enviado por el usuario
 *               chatId:
 *                 type: string
 *                 description: ID único de la sesión de chat
 *               userId:
 *                 type: string
 *                 description: ID único del usuario
 *               model:
 *                 type: string
 *                 description: Nombre del modelo a utilizar
 *               language:
 *                 type: string
 *                 description: Idioma de la respuesta
 *     responses:
 *       200:
 *         description: Respuesta generada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 provider:
 *                   type: string
 *                 result:
 *                   type: string
 *       400:
 *         description: Error de validación (campos faltantes)
 *       404:
 *         description: Chat no encontrado
 *       500:
 *         description: Error interno del servidor
 */

router.post(
    '/interview/:provider/evaluate',
    verifyToken,
    userIdValidation,
    completionValidationRules,
    validateRequest,
    evaluateInterviewAnswer
);

export default router;