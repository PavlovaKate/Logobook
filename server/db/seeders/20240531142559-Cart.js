'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Carts',
      [
        {
          userId: 1,
          cartStatus: false,
          totalAmount: 5419,
          orderStatus: 'Ожидает получения',
        },
        {
          userId: 1,
          cartStatus: true,
          totalAmount: 4870,
          orderStatus: 'Получен',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Carts', null, {});
  },
};
