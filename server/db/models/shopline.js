'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShopLine extends Model {
    static associate({ Shop, Book }) {
      this.belongsTo(Shop, { foreignKey: 'shopId' });
      this.belongsTo(Book, { foreignKey: 'bookId' });
    }
  }
  ShopLine.init(
    {
      bookId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Books',
          key: 'id',
        },
        onDelete: 'Cascade',
        onUpdate: 'Cascade',
      },
      number: {
        type: DataTypes.INTEGER,
      },
      shopId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Shops',
          key: 'id',
        },
        onDelete: 'Cascade',
        onUpdate: 'Cascade',
      },
    },
    {
      sequelize,
      modelName: 'ShopLine',
    }
  );
  return ShopLine;
};
