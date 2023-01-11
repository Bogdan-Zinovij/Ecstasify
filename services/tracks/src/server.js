require('dotenv').config();
const app = require('./app');
const { db } = require('./db/db');
const { associate } = require('./db/associate')
const EXPRESS_PORT = process.env.EXPRESS_PORT || 8080;

(async () => {
  try {
    associate();
    await db.sync({ force: true });
  } catch (err) {
    console.log(err);
  }
  app.listen(EXPRESS_PORT, () => {
    console.log(`Server listening on http://localhost:${EXPRESS_PORT}`);
  });
})();
