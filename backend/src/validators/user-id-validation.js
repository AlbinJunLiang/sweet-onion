import { body } from "express-validator";

export const userIdValidation = [
    body('userId')
        .trim()
        .notEmpty().withMessage('userId is required.')
];