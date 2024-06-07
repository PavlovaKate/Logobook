'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate({ Book }) {
      this.hasMany(Book, { foreignKey: 'authorId' });
    }
  }
  Author.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Author',
    }
  );
  return Author;
};
