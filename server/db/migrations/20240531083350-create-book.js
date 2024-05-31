'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      pageCount: {
        type: Sequelize.INTEGER,
      },
      imageSmall: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      saleability: {
        type: Sequelize.BOOLEAN,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      amount: {
        type: Sequelize.FLOAT,
      },
      authorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Authors',
          key: 'id',
        },
        onDelete: 'Cascade',
        onUpdate: 'Cascade',
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id',
        },
        onDelete: 'Cascade',
        onUpdate: 'Cascade',
      },
      publisherId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Publishers',
          key: 'id',
        },
        onDelete: 'Cascade',
        onUpdate: 'Cascade',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Books');
  },
};
