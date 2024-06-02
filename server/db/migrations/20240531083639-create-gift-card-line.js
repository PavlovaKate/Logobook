'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GiftCardLines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      giftCardId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'GiftCards',
          key: 'id',
        },
        onDelete: 'Cascade',
        onUpdate: 'Cascade',
      },
      cartId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Carts',
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
    await queryInterface.dropTable('GiftCardLines');
  },
};
