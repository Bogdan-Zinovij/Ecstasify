import Router from 'express';
import userController from '../controllers/user.controller.js';
import {
  idParamValidation,
  userValidScheme,
} from '../validation/user.validation.js';

const userRouter = new Router();

userRouter
  .get('/', userController.getUsers)
  .get('/:id', idParamValidation, userController.getUserById)
  .patch('/:id', idParamValidation, userValidScheme, userController.updateUser)
  .delete('/:id', idParamValidation, userController.deleteUser);

export default userRouter;
