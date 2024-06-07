'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'CartLines',
      [
        {
          bookId: 2,
          cartId: 2,
          count: 1,
        },
        {
          bookId: 3,
          cartId: 2,
          count: 1,
        },
        {
          bookId: 4,
          cartId: 2,
          count: 1,
        },
        {
          bookId: 2,
          cartId: 1,
          count: 2,
        },
        {
          bookId: 3,
          cartId: 1,
          count: 1,
        },
        {
          bookId: 4,
          cartId: 1,
          count: 1,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CartLines', null, {});
  },
};
