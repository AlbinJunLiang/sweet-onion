import { Router } from "express";
import {
    createModel,
    getModels,
    updateModel,
    deleteModel,
    getModelById,
} from "../controllers/model.controller.js";
import { createModelValidationRules } from "../validators/model-validator.js";
import { validateRequest } from "../middlewares/bad-request-middleware.js";
import verifyToken from "../middlewares/firebase-auth-middleware.js";
import { allowOnlyEmails } from "../middlewares/email-verified-middleware.js";
import { paginationValidationRules } from "../validators/pagination--validator.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Models
 *   description: Model management
 */

/**
 * @swagger
 * /api/models:
 *   get:
 *     summary: Get all models with pagination
 *     tags: [Models]
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
 *         description: Models retrieved successfully
 */
router.get("/",paginationValidationRules, validateRequest, verifyToken, allowOnlyEmails, getModels);

/**
 * @swagger
 *
 * /api/models/{id}:
 *   get:
 *     summary: Get model by ID
 *     tags: [Models]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.get('/:id', getModelById);

/**
 * @swagger
 * /api/models:
 *   post:
 *     summary: Create a new model
 *     tags: [Models]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - provider
 *             properties:
 *               model:
 *                 type: string
 *                 example: user
 *               provider:
 *                 type: string
 *                 example: OpenAI
 *               status:
 *                 type: string
 *                 enum: [ACTIVE, INACTIVE]
 *                 example: ACTIVE
 *               defect:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       201:
 *         description: Model created successfully
 *       400:
 *         description: Model already exists
 */
router.post("/", createModelValidationRules, validateRequest,
    createModel);

/**
 * @swagger
 * /api/models/{id}:
 *   put:
 *     summary: Update a model
 *     tags: [Models]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               model:
 *                 type: string
 *               provider:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [ACTIVE, INACTIVE]
 *               defect:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Model updated successfully
 *       404:
 *         description: Model not found
 */
router.put("/:id", verifyToken, allowOnlyEmails, createModelValidationRules, validateRequest, updateModel);

/**
 * @swagger
 * /api/models/{id}:
 *   delete:
 *     summary: Delete a model
 *     tags: [Models]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Model deleted successfully
 *       404:
 *         description: Model not found
 */
router.delete("/:id", verifyToken, allowOnlyEmails, deleteModel);

export default router;