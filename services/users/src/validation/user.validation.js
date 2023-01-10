import { body, param } from 'express-validator';

export const idParamValidation = param(
  'id',
  'The id parameter should be type of uuid',
).isUUID();

export const userValidScheme = [
  body('name', 'The name should be between 2 and 20 characters long')
    .optional()
    .isLength({ min: 2, max: 20 }),
  body('email', 'The email should be valid').optional().isEmail(),
  body('password', 'The password should be between 8 and 16 characters long')
    .optional()
    .isLength({ min: 8, max: 16 }),
];
