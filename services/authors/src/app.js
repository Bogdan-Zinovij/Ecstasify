import express from 'express';
import bodyParser from 'body-parser';
import authorRouter from './routers/author.router.js';
import { PREFIX } from './config.js';

const app = express();

app.use(bodyParser.json());
app.use(PREFIX + '/authors', authorRouter);

export default app;
