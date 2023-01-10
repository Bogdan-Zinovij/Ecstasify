import DataTypes from 'sequelize';
import db from '../db.js';

export const User = db.define(
  'users',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    scopes: {
      withoutPassword: {
        attributes: { exclude: ['password'] },
      },
    },
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  },
);
