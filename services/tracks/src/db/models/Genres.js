'use strict';

const DataTypes = require('sequelize');
const { db } = require('../db');

const Genres = db.define(
  'genres',
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
  },
  {
    timestamps: false,
  },
);

module.exports = { Genres };
