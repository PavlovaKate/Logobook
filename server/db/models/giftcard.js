'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GiftCard extends Model {
    static associate({ GiftCardLine }) {
      this.hasMany(GiftCardLine, { foreignKey: 'giftCardId' });
    }
  }
  GiftCard.init(
    {
      amount: {
        type: DataTypes.FLOAT,
      },
    },
    {
      sequelize,
      modelName: 'GiftCard',
    }
  );
  return GiftCard;
};
