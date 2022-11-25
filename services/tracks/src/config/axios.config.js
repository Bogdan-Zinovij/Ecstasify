const axios = require('axios');
const axiosRetry = require('axios-retry');

const axiosClient = axios.create({
  baseURL: 'http://host.docker.internal:80/api/v1/',
  timeout: 5000,
});

axiosRetry(axiosClient, {
  retries: 3,
  retryDelay: (retryCount) => {
    console.log(`retry attempt: ${retryCount}`);
    return retryCount * 1000;
  },
  retryCondition: (error) => {
    return !error?.response?.status || error.response.status >= 500;
  },
});

module.exports = {
  axiosClient,
};
