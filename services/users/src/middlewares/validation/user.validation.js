import { body, param } from 'express-validator';
import { userValidationConfig } from '../../config.js';

const { MIN_NAME_LENGTH, MAX_NAME_LENGTH, MIN_PASS_LENGTH, MAX_PASS_LENGTH } =
  userValidationConfig;

export const idParamValidation = param(
  'id',
  'The id parameter should be type of uuid',
).isUUID();

export const userValidScheme = [
  body('id', 'The id field should not passed into req.body').not().exists(),
  body(
    'name',
    `Name should be from ${MIN_NAME_LENGTH} to ${MAX_NAME_LENGTH} characters`,
  )
    .optional()
    .isLength({
      min: MIN_NAME_LENGTH,
      max: MAX_NAME_LENGTH,
    }),
  body('email', 'The email should be valid').optional().isEmail(),
  body(
    'password',
    `Password should be from ${MIN_PASS_LENGTH} to ${MAX_PASS_LENGTH} characters`,
  )
    .optional()
    .isLength({
      min: MIN_PASS_LENGTH,
      max: MAX_PASS_LENGTH,
    }),
];
