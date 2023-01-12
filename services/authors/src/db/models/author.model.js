import DataTypes from 'sequelize';
import db from '../db.js';

export const Authors = db.define(
  'authors',
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
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  },
);
