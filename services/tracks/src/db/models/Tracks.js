'use strict'

const DataTypes = require('sequelize')
const { db } = require('../db')

const Tracks = db.define(
  'tracks',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    genreId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  }
)

module.exports = { Tracks }
