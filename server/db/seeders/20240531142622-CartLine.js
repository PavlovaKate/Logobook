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
        },
        {
          bookId: 3,
          cartId: 2,
        },
        {
          bookId: 4,
          cartId: 2,
        },
        {
          bookId: 2,
          cartId: 1,
        },
        {
          bookId: 3,
          cartId: 1,
        },
        {
          bookId: 4,
          cartId: 1,
        },
        {
          bookId: 5,
          cartId: 3,
        },
        {
          bookId: 6,
          cartId: 3,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CartLines', null, {});
  },
};
