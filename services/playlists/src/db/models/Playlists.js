'use strict';

const DataTypes = require('sequelize');
const { db } = require('../db');

const Playlists = db.define(
  'playlists',
  {
    id: {
      type: DataTypes.STRING(64),
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  },
);

module.exports = { Playlists };
