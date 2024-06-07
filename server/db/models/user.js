'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ RateLine, Cart, Favourite, Review }) {
      this.hasMany(RateLine, { foreignKey: 'userId' });
      this.hasMany(Cart, { foreignKey: 'userId' });
      this.hasMany(Favourite, { foreignKey: 'userId' });
      this.hasMany(Review, { foreignKey: 'userId' });
    }
  }
  User.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      isAdmin: {
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      tgUsername: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
