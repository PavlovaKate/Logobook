'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MainPage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MainPage.init(
    {
      image: {
        type: DataTypes.TEXT,
      },
      title: {
        type: DataTypes.TEXT,
      },
      link: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'MainPage',
    }
  );
  return MainPage;
};
