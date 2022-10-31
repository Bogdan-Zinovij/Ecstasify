const { Sequelize } = require('sequelize');

const db = new Sequelize('demo', 'demo', 'demo', {
  host: 'postgres-tracks',
  dialect: 'postgres',
});

module.exports = { db };
