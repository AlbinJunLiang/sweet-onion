import { body } from "express-validator";


export const completionValidationRules = [
    body('content')
        .trim()
        .notEmpty().withMessage('Content is required.') // Si es obligatorio
        .isLength({ min: 1, max: 500 }).withMessage('Content must be between 1 and 500 characters.'),
        
    body('model')
        .optional() // Si no viene, se ignora
        .trim()
        .isLength({ max: 300 }).withMessage('Model must be at most 300 characters long.'),

    body('language')
        .optional() // Si no viene, se ignora
        .trim()
        .isLength({ max: 300 }).withMessage('Language must be at most 300 characters long.')
];
