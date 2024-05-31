'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate({ Review }) {
      this.belongsTo(Review, { foreignKey: 'rewiewId' });
    }
  }
  Image.init(
    {
      rewiewId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Reviews',
          key: 'id',
        },
        onDelete: 'Cascade',
        onUpdate: 'Cascade',
      },
      image: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Image',
    }
  );
  return Image;
};
