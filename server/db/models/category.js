'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({ Book }) {
      this.hasMany(Book, { foreignKey: 'categoryId' });
      this.hasMany()
    }
  }
  Category.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Category',
    }
  );
  return Category;
};
