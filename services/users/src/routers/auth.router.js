import Router from 'express';
import authController from '../controllers/auth.controller.js';
import {
  signInValidScheme,
  signUpValidScheme,
} from '../validation/auth.validation.js';

const authRouter = new Router();

authRouter
  .post('/sign-up', signUpValidScheme, authController.signUp)
  .post('/sign-in', signInValidScheme, authController.signIn)
  .post('/sign-out', authController.signOut)
  .post('/refresh', authController.refresh)
  .post('/verify/:token', authController.verifyToken);

export default authRouter;
