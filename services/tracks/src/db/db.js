const { Sequelize } = require('sequelize')

const db = new Sequelize('tracks', 'tracks', 'tracks', {
  host: 'postgres-tracks',
  dialect: 'postgres',
})

module.exports = { db }
