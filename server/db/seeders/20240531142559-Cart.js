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
          totalAmount: 3501,
          orderStatus: 'Ожидает получения',
        },
        {
          userId: 1,
          cartStatus: true,
          totalAmount: 4501,
          orderStatus: 'Получен',
        },
        {
          userId: 3,
          cartStatus: false,
          totalAmount: 5471,
          orderStatus: 'Ожидает получения',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Carts', null, {});
  },
};
