import Router from 'express';
import userController from '../controllers/user.controller.js';

const userRouter = new Router();

userRouter
  .get('/', userController.getUsers)
  .post('/', userController.createUser)
  .get('/:id', userController.getUserById)
  .patch('/:id', userController.updateUser)
  .delete('/:id', userController.deleteUser);

export default userRouter;
