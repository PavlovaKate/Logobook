'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rate extends Model {
    static associate({ Book, RateLine }) {
      this.belongsTo(Book, { foreignKey: 'bookId' });
      this.hasMany(RateLine, { foreignKey: 'rateId' });
    }
  }
  Rate.init(
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
      rateAvg: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Rate',
    }
  );
  return Rate;
};
