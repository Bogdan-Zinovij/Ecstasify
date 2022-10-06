require('dotenv').config();
const app = require('./app');

const EXPRESS_PORT = process.env.EXPRESS_PORT || 8080;

app.listen(EXPRESS_PORT, () => {
  console.log(`Server listening on http://localhost:${EXPRESS_PORT}`);
});
