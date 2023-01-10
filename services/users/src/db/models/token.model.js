import DataTypes from 'sequelize';
import db from '../db.js';

export const Token = db.define(
  'tokens',
  {
    userId: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    refreshToken: {
      type: DataTypes.STRING(512),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
);
