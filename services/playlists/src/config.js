'use strict';

const PREFIX = '/api/v1';
const errorMessages = {
  PLAYLIST_DELETION_FAILED: 'Failed to delete a playlist with specified ID',
  PLAYLIST_NOT_EXISTS_ID: 'The playlist with specified ID does not exists',
};

module.exports = { PREFIX, errorMessages };
