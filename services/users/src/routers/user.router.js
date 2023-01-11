import Router from 'express';
import userController from '../controllers/user.controller.js';
import authMiddleware from '../middlewares/auth/auth.middleware.js';
import permissionMiddleware from '../middlewares/auth/permission.middleware.js';
import {
  idParamValidation,
  userValidScheme,
} from '../middlewares/validation/user.validation.js';

const userRouter = new Router();

userRouter
  .get('/', authMiddleware, permissionMiddleware, userController.getUsers)
  .post(
    '/',
    authMiddleware,
    permissionMiddleware,
    userValidScheme,
    userController.createUser,
  )
  .get(
    '/:id',
    authMiddleware,
    permissionMiddleware,
    idParamValidation,
    userController.getUserById,
  )
  .patch(
    '/:id',
    authMiddleware,
    permissionMiddleware,
    idParamValidation,
    userValidScheme,
    userController.updateUser,
  )
  .delete(
    '/:id',
    authMiddleware,
    permissionMiddleware,
    idParamValidation,
    userController.deleteUser,
  );

export default userRouter;
