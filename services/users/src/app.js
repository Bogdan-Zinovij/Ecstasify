import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import userRouter from './routers/user.router.js';
import authRouter from './routers/auth.router.js';
import { PREFIX } from './config.js';

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.use(PREFIX + '/users', userRouter);
app.use(PREFIX + '/users/auth', authRouter);

export default app;
