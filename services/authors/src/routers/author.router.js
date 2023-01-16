import Router from 'express';
import authorController from '../controllers/author.controller.js';
import {
  authorValidScheme,
  idParamValidation,
} from '../middlewares/author.validation.js';
import validateRequest from '../middlewares/validate-request.js';

const authorRouter = new Router();

authorRouter
  .get('/', authorController.getAuthors)
  .post('/', authorValidScheme, validateRequest, authorController.createAuthor)
  .get(
    '/:id',
    idParamValidation,
    validateRequest,
    authorController.getAuthorById,
  )
  .patch(
    '/:id',
    idParamValidation,
    authorValidScheme,
    validateRequest,
    authorController.updateAuthor,
  )
  .delete(
    '/:id',
    idParamValidation,
    validateRequest,
    authorController.deleteAuthor,
  );

export default authorRouter;
