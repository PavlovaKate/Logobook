'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GiftCardLine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
