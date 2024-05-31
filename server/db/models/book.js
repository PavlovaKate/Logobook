'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
      pageCount: {
        type: DataTypes.INTEGER,
      },
      imageSmall: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      saleability: {
        type: DataTypes.BOOLEAN,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      amount: {
        type: DataTypes.FLOAT,
      },
      authorId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Authors',
          key: 'id',
        },
        onDelete: 'Cascade',
        onUpdate: 'Cascade',
      },
      categoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Categories',
          key: 'id',
        },
        onDelete: 'Cascade',
        onUpdate: 'Cascade',
      },
      publisherId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Publishers',
          key: 'id',
        },
        onDelete: 'Cascade',
        onUpdate: 'Cascade',
      },
    },
    {
      sequelize,
      modelName: 'Book',
    }
  );
  return Book;
};
