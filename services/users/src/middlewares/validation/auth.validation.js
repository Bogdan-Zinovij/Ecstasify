import { body } from 'express-validator';

export const signUpValidScheme = [
  body('name', 'The name should be between 2 and 20 characters long').isLength({
    min: 2,
    max: 20,
  }),
  body('email', 'The email should be valid').isEmail(),
  body(
    'password',
    'The password should be between 8 and 16 characters long',
  ).isLength({ min: 8, max: 16 }),
];

export const signInValidScheme = [
  body('email', 'The email should be valid').notEmpty().bail().isEmail(),
  body('password', 'The password field can not be empty').notEmpty(),
];
