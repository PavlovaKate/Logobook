'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RateLine extends Model {
    static associate({ Book, Rate, User }) {
      this.belongsTo(Book, { foreignKey: 'bookId' });
      this.belongsTo(Rate, { foreignKey: 'rateId' });
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  RateLine.init(
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
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'Cascade',
        onUpdate: 'Cascade',
      },
      rate: {
        type: DataTypes.INTEGER,
      },
      rateId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Rates',
          key: 'id',
        },
        onDelete: 'Cascade',
        onUpdate: 'Cascade',
      },
    },
    {
      sequelize,
      modelName: 'RateLine',
    }
  );
  return RateLine;
};
