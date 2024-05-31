'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TagLine extends Model {
    static associate({ Tag, Book }) {
      this.belongsTo(Tag, { foreignKey: 'tagId' });
      this.belongsTo(Book, { foreignKey: 'bookId' });
    }
  }
  TagLine.init(
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
      tagId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Tags',
          key: 'id',
        },
        onDelete: 'Cascade',
        onUpdate: 'Cascade',
      },
    },
    {
      sequelize,
      modelName: 'TagLine',
    }
  );
  return TagLine;
};
