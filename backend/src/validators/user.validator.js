import { body, validationResult } from 'express-validator';

export const userValidationRules = [
    body('email')
        .isEmail()
        .withMessage('Email not valid.')
        .normalizeEmail(),

    body('name')
        .trim()
        .isLength({ min: 3, max: 50 })
        .withMessage('Name must be between 3 and 50 characters long.'),
];



export const userUpdateValidationRules = [
    body('name')
        .trim()
        .optional()
        .isLength({ min: 1, max: 50 })
        .withMessage('Name must be between 1 and 50 characters long.'),

    body('status')
        .optional()
        .trim()
        .isIn(['registerd', 'inactive', 'verified'])
        .withMessage('Invalid status value.'),

    body('authId')
        .optional()
        .trim()
        .isLength({ min: 5, max: 100 })
        .withMessage('AuthId must be between 5 and 100 characters long.')
        .withMessage('AuthId must contain only letters and numbers.')
];