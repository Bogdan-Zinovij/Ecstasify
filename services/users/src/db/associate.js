import { Token } from './models/token.model.js';
import { User } from './models/user.model.js';

export const associate = () => {
  User.hasOne(Token);
  Token.belongsTo(User, {
    foreignKey: 'userId',
  });
};
