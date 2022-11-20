const { Sequelize } = require('sequelize');

const db = new Sequelize('users', 'users', 'users', {
  host: 'postgres-users',
  dialect: 'postgres',
});

module.exports = { db };
