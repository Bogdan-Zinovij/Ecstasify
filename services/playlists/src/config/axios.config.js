const axios = require('axios');
const axiosRetry = require('axios-retry');
const {
  AXIOS_TIMEOUT,
  AXIOS_BASE_URL,
  AXIOS_RETRIES,
  AXIOS_RETRY_DELAY,
  AXIOS_RETRY_CONDITION_RESPONSE_STATUS,
} = require('../config');

const axiosClient = axios.create({
  baseURL: AXIOS_BASE_URL,
  timeout: AXIOS_TIMEOUT,
});

axiosRetry(axiosClient, {
  retries: AXIOS_RETRIES,
  retryDelay: (retryCount) => {
    console.log(`retry attempt: ${retryCount}`);
    return retryCount * AXIOS_RETRY_DELAY;
  },
  retryCondition: (error) =>
    !error?.response?.status ||
    error.response.status >= AXIOS_RETRY_CONDITION_RESPONSE_STATUS,
});

module.exports = {
  axiosClient,
};
