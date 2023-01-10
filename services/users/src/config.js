export const PREFIX = '/api/v1';
export const SALT = 7;

export const kafkaTopics = {
  NEW_USER_REGISTERED: 'new-user-registered',
};

export const errorMessages = {
  UNAUTHORIZED: 'The user is not authorized',
  PERMISSION_DENIED: 'Permission denied. Only Admin can access this endpoint',
  USER_ALREADY_EXISTS: 'The user with this email is already exists',
  USER_NOT_EXISTS_EMAIL: 'The user with specified email does not exists',
  USER_NOT_EXISTS_ID: 'The user with specified ID does not exists',
  WRONG_PASSWORD: 'Wrong password',
  ACCESS_TOKEN_EXPIRED: 'The access token has expired',
  KAFKA_FAILED_CONNECT: 'Failed connecting to kafka: ',
};

export const roles = {
  USER: 'USER',
  ADMIN: 'ADMIN',
};
