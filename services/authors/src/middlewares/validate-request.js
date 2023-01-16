import { validationResult } from 'express-validator';
import { errorMessages } from '../config.js';

export default (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({
        message: errorMessages.VALIDATION_ERROR,
        errors: errors.array(),
      });
  }

  next();
};
