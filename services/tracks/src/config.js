'use strict';

const PREFIX = '/api/v1';
const kafkaTopics = {
  NEW_TRACK: 'new-track-created',
};
const errorMessages = {
  TRACK_DELETION_FAILED: 'Failed to delete a track with specified ID',
  TRACK_NOT_EXISTS_ID: 'The track with specified ID does not exists',
  GENRE_DELETION_FAILED: 'Failed to delete a genre with specified ID',
  GENRE_NOT_EXISTS_ID: 'The genre with specified ID does not exists',
  AUTHOR_NOT_FOUND: 'Author not found',
  AUTHORS_NOT_FOUND: 'Authors not found',
  KAFKA_FAILED_CONNECT: 'Failed connecting to kafka: ',
};

const AXIOS_TIMEOUT = 5000;
const AXIOS_BASE_URL = 'http://ecstasify-authors-service/api/v1/';
const AXIOS_RETRIES = 3;
const AXIOS_RETRY_DELAY = 1000;
const AXIOS_RETRY_CONDITION_RESPONSE_STATUS = 500;

module.exports = {
  PREFIX,
  kafkaTopics,
  errorMessages,
  AXIOS_TIMEOUT,
  AXIOS_BASE_URL,
  AXIOS_RETRIES,
  AXIOS_RETRY_DELAY,
  AXIOS_RETRY_CONDITION_RESPONSE_STATUS,
};
