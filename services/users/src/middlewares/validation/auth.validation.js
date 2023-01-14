import { body } from 'express-validator';
import { userValidationConfig } from '../../config.js';

const { MIN_NAME_LENGTH, MAX_NAME_LENGTH, MIN_PASS_LENGTH, MAX_PASS_LENGTH } =
  userValidationConfig;

export const signUpValidScheme = [
  body(
    'name',
    'Name should be from {MIN_NAME_LENGTH} to {MAX_NAME_LENGTH} characters',
  ).isLength({
    min: MIN_NAME_LENGTH,
    max: MAX_NAME_LENGTH,
  }),
  body('email', 'The email should be valid').isEmail(),
  body(
    'password',
    `Password should be from ${MIN_PASS_LENGTH} to ${MAX_PASS_LENGTH} characters`,
  ).isLength({ min: MIN_PASS_LENGTH, max: MAX_PASS_LENGTH }),
];

export const signInValidScheme = [
  body('email', 'The email should be valid').notEmpty().bail().isEmail(),
  body('password', 'The password field can not be empty').notEmpty(),
];
