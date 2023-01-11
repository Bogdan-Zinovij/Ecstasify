import express from 'express';
import bodyParser from 'body-parser';
import authorController from './controllers/authorController.js';
import { PREFIX } from './config.js';

const app = express();

app.use(bodyParser.json());
app
  .get(PREFIX + '/authors', authorController.getAuthors)
  .get(PREFIX + '/authors/:id', authorController.getAuthorById)
  .post(PREFIX + '/authors', authorController.createAuthor)
  .patch(PREFIX + '/authors/:id', authorController.updateAuthor)
  .delete(PREFIX + '/authors/:id', authorController.deleteAuthor);

export default app;
