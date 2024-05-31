'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate({ TagLine }) {
      this.hasMany(TagLine, { foreignKey: 'tagId' });
    }
  }
  Tag.init(
    {
      tagName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Tag',
    }
  );
  return Tag;
};
