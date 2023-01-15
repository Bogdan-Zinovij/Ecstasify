import { body, param } from 'express-validator';
import { authorValidationConfig } from '../config.js';

const { MIN_NAME_LENGTH, MAX_NAME_LENGTH } = authorValidationConfig;

export const idParamValidation = param(
  'id',
  'The id parameter should be type of uuid',
).isUUID();

export const authorValidScheme = [
  body('id', 'The id field should not passed into req.body').not().exists(),
  body(
    'name',
    `Name should be from ${MIN_NAME_LENGTH} to ${MAX_NAME_LENGTH} characters`,
  ).isLength({
    min: MIN_NAME_LENGTH,
    max: MAX_NAME_LENGTH,
  }),
];
