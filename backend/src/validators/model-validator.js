import { body, query } from "express-validator";

export const createModelValidationRules = [
    body("model")
        .optional()
        .isString()
        .withMessage("Model must be a string")
        .isLength({ max: 300 })
        .withMessage("Model must not exceed 300 characters"),

    body("provider")
        .notEmpty()
        .withMessage("Provider is required")
        .isString()
        .withMessage("Provider must be a string")
        .isLength({ min: 2, max: 100 })
        .withMessage("Provider must be between 2 and 100 characters"),

    body("status")
        .optional()
        .isIn(["ACTIVE", "INACTIVE"])
        .withMessage("Status must be either ACTIVE or INACTIVE"),

    body("defect")
        .optional()
        .isBoolean()
        .withMessage("Defect must be a boolean value"),
];

