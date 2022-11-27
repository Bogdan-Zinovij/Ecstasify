const { Sequelize } = require('sequelize');

const db = new Sequelize('demo', 'demo', 'demo', {
  host: 'postgres-authors',
  dialect: 'postgres',
});

module.exports = { db };
