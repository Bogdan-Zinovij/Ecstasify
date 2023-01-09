import Router from 'express';
import authController from '../controllers/auth.controller.js';

const authRouter = new Router();

authRouter
  .post('/sign-up', authController.signUp)
  .post('/sign-in', authController.signIn)
  .post('/sign-out', authController.signOut)
  .post('/refresh', authController.refresh)
  .post('/verify/:token', authController.verifyToken);

export default authRouter;
