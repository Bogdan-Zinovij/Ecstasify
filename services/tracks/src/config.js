'use strict';

const PREFIX = '/api/v1';

const errorMessages = {
  GENRE_DELETION_FAILED: 'Failed to delete a genre with specified ID',
  GENRE_NOT_EXISTS_ID: 'The genre with specified ID does not exists',
};

module.exports = { PREFIX, errorMessages };
