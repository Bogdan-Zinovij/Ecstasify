import Router from 'express';
import authorController from '../controllers/authorController.js';

const authorRouter = new Router();

authorRouter
  .get('/', authorController.getAuthors)
  .get('/:id', authorController.getAuthorById)
  .post('/', authorController.createAuthor)
  .patch('/:id', authorController.updateAuthor)
  .delete('/:id', authorController.deleteAuthor);

export default authorRouter;
