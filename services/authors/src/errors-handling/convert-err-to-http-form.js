import { errorMessages } from '../config.js';

export const convertErrToHttpForm = (err) => {
  const responseStatus = err.status ? err.status : 500;
  const message =
    responseStatus === 500 ? errorMessages.INTERNAL_SERVER_ERROR : err.message;

  return { responseStatus, message };
};
