'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate({ GiftCardLine, CartLine, User }) {
      this.hasMany(GiftCardLine, { foreignKey: 'cartId' });
      this.hasMany(CartLine, { foreignKey: 'cartId' });
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Cart.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'Cascade',
        onUpdate: 'Cascade',
      },
      cartStatus: {
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      totalAmount: {
        type: DataTypes.FLOAT,
      },
      orderStatus: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Cart',
    }
  );
  return Cart;
};
