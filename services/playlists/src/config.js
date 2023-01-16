'use strict';

const PREFIX = '/api/v1';
const errorMessages = {
  PLAYLIST_DELETION_FAILED: 'Failed to delete a playlist with specified ID',
  PLAYLIST_NOT_EXISTS_ID: 'The playlist with specified ID does not exists',
  PLAYLIST_TRACK_DELETION_FAILED:
    'Failed to delete a playlistTrack with specified ID',
  PLAYLIST_TRACK_NOT_EXISTS_ID:
    'The playlistTrack with specified ID does not exists',
};

const AXIOS_TIMEOUT = 5000;
const AXIOS_BASE_URL = 'http://ecstasify-authors-service/api/v1/';
const AXIOS_RETRIES = 3;
const AXIOS_RETRY_DELAY = 1000;
const AXIOS_RETRY_CONDITION_RESPONSE_STATUS = 500;

module.exports = {
  PREFIX,
  errorMessages,
  AXIOS_TIMEOUT,
  AXIOS_BASE_URL,
  AXIOS_RETRIES,
  AXIOS_RETRY_DELAY,
  AXIOS_RETRY_CONDITION_RESPONSE_STATUS,
};
