'use strict';

const DataTypes = require('sequelize');
const { db } = require('../db');

const PlaylistTracks = db.define(
  'playlistTracks',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    playlistId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    trackId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { PlaylistTracks };
