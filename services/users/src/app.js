import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import userController from './controllers/userController.js';
import authController from './controllers/authController.js';
import { PREFIX } from './config.js';

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app
  .get(PREFIX + '/users', userController.getUsers)
  .get(PREFIX + '/users/:id', userController.getUserById)
  .post(PREFIX + '/users', userController.createUser)
  .patch(PREFIX + '/users/:id', userController.updateUser)
  .delete(PREFIX + '/users/:id', userController.deleteUser)
  .post(PREFIX + '/auth/signUp', authController.signUp)
  .post(PREFIX + '/auth/signIn', authController.signIn)
  .post(PREFIX + '/auth/signOut', authController.signOut)
  .post(PREFIX + '/auth/refresh', authController.refresh);

export default app;
