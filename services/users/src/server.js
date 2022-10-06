require('dotenv').config();
const app = require('./app');

const EXPRESS_PORT = process.env.EXPRESS_PORT || 8080;
const HOST = process.env.HOST || 'localhost';

app.listen(EXPRESS_PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${EXPRESS_PORT}`);
});
