const { Sequelize } = require('sequelize');

const db = new Sequelize('authors', 'authors', 'authors', {
  host: 'postgres-authors',
  dialect: 'postgres',
});

module.exports = { db };
