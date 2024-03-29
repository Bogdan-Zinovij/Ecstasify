export const PREFIX = '/api/v1';

export const errorMessages = {
  AUTHOR_ALREADY_EXISTS: 'Author with the same name has already exists',
  AUTHOR_NOT_EXISTS: 'Author with the specified ID does not exists',
  INTERNAL_SERVER_ERROR: 'Internal server error',
  VALIDATION_ERROR: 'The request contains invalid data',
};

export const authorValidationConfig = {
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 20,
};
