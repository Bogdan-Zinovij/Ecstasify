import Router from 'express';
import authorController from '../controllers/author.controller.js';
import {
  authorValidScheme,
  idParamValidation,
} from '../middlewares/author.validation.js';

const authorRouter = new Router();

authorRouter
  .get('/', authorController.getAuthors)
  .post('/', authorValidScheme, authorController.createAuthor)
  .get('/:id', idParamValidation, authorController.getAuthorById)
  .patch(
    '/:id',
    idParamValidation,
    authorValidScheme,
    authorController.updateAuthor,
  )
  .delete('/:id', idParamValidation, authorController.deleteAuthor);

export default authorRouter;
