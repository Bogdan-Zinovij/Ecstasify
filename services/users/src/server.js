import app from './app.js';
import db from './db/db.js';
import { associate } from './db/associate.js';
import * as dotenv from 'dotenv';
dotenv.config();

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
