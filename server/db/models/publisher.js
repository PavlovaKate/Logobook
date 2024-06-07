'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publisher extends Model {
    static associate({ Book }) {
      this.hasMany(Book, { foreignKey: 'publisherId' });
    }
  }
  Publisher.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Publisher',
    }
  );
  return Publisher;
};
