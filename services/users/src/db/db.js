const { Sequelize } = require('sequelize');

const db = new Sequelize('users', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = { db };
