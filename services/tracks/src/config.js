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

module.exports = { PREFIX, kafkaTopics, errorMessages };
