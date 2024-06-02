'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate({
      Author,
      Publisher,
      ShopLine,
      Rate,
      CartLine,
      Favourite,
      Review,
      TagLine,
      RateLine,
      Category
    }) {
      this.belongsTo(Author, { foreignKey: 'authorId' });
      this.belongsTo(Publisher, { foreignKey: 'publisherId' });
      this.belongsTo(RateLine, { foreignKey: 'categoryId' });
      this.hasMany(ShopLine, { foreignKey: 'bookId' });
      this.hasOne(Rate, { foreignKey: 'bookId' });
      this.hasMany(CartLine, { foreignKey: 'bookId' });
      this.hasMany(Favourite, { foreignKey: 'bookId' });
      this.hasMany(Review, { foreignKey: 'bookId' });
      this.hasMany(TagLine, { foreignKey: 'bookId' });
      this.hasOne(Category, { foreignKey: 'bookId' });
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
