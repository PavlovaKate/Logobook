'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GiftCardLine extends Model {
    static associate({ GiftCard, Cart }) {
      this.belongsTo(GiftCard, { foreignKey: 'giftCardId' });
      this.belongsTo(Cart, { foreignKey: 'cartId' });
    }
  }
  GiftCardLine.init(
    {
      giftCardId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'GiftCards',
          key: 'id',
        },
        onDelete: 'Cascade',
        onUpdate: 'Cascade',
      },
      cartId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Carts',
          key: 'id',
        },
        onDelete: 'Cascade',
        onUpdate: 'Cascade',
      },
    },
    {
      sequelize,
      modelName: 'GiftCardLine',
    }
  );
  return GiftCardLine;
};
