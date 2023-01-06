import DataTypes from 'sequelize';
import db from '../db.js';

export const Tokens = db.define(
  'tokens',
  {
    userId: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    refreshToken: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
);
