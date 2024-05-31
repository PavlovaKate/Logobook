'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    static associate({ ShopLine }) {
      this.hasMany(ShopLine, { foreignKey: 'shopId' });
    }
  }
  Shop.init(
    {
      shopName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      adress: {
        type: DataTypes.STRING,
      },
      latitude: {
        type: DataTypes.FLOAT,
      },
      longitude: {
        type: DataTypes.FLOAT,
      },
      workTime: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Shop',
    }
  );
  return Shop;
};
