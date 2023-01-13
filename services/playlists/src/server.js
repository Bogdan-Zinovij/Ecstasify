require('dotenv').config();
const app = require('./app');
const { associate } = require('./db/associate');
const { db } = require('./db/db');
const EXPRESS_PORT = process.env.EXPRESS_PORT;
const EXPRESS_HOST = process.env.EXPRESS_HOST;

(async () => {
  try {
    associate();
    await db.sync({ force: true });
  } catch (err) {
    console.log(err);
  }
  app.listen(EXPRESS_PORT, () => {
    console.log(`Server listening on http://${EXPRESS_HOST}:${EXPRESS_PORT}`);
  });
})();
