import { Tokens } from './models/Token.js';
import { Users } from './models/User.js';

export const associate = () => {
  Users.hasOne(Tokens);
  Tokens.belongsTo(Users, {
    foreignKey: 'userId',
  });
};
