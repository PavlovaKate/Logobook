'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RateLines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      bookId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Books',
          key: 'id',
        },
        onDelete: 'Cascade',
        onUpdate: 'Cascade',
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'Cascade',
        onUpdate: 'Cascade',
      },
      rate: {
        type: Sequelize.INTEGER,
      },
      rateId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Rates',
          key: 'id',
        },
        onDelete: 'Cascade',
        onUpdate: 'Cascade',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('RateLines');
  },
};
