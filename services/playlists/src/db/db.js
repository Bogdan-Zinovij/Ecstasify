const { Sequelize } = require('sequelize');

const db = new Sequelize('playlists', 'playlists', 'playlists', {
  host: 'postgres-playlists',
  dialect: 'postgres',
});

module.exports = { db };
