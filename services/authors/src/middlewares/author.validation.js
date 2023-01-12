import { body, param } from 'express-validator';

export const idParamValidation = param(
  'id',
  'The id parameter should be type of uuid',
).isUUID();

export const authorValidScheme = [
  body('id', 'The id field should not passed into req.body').not().exists(),
  body('name', 'The name should be between 2 and 20 characters long').isLength({
    min: 2,
    max: 20,
  }),
];
