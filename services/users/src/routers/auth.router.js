import Router from 'express';
import authController from '../controllers/auth.controller.js';
import {
  signInValidScheme,
  signUpValidScheme,
} from '../middlewares/validation/auth.validation.js';
import validateRequest from '../middlewares/validation/validate-request.js';

const authRouter = new Router();

authRouter
  .post('/sign-up', signUpValidScheme, validateRequest, authController.signUp)
  .post('/sign-in', signInValidScheme, validateRequest, authController.signIn)
  .post('/sign-out', authController.signOut)
  .post('/refresh', authController.refresh)
  .post('/verify/:token', authController.verifyToken);

export default authRouter;
