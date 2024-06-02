'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Favourites',
      [
        {
          bookId: 1,
          userId: 1,
        },
        {
          bookId: 2,
          userId: 1,
        },
        {
          bookId: 3,
          userId: 1,
        },
        {
          bookId: 4,
          userId: 1,
        },
        {
          bookId: 10,
          userId: 3,
        },
        {
          bookId: 20,
          userId: 3,
        },
        {
          bookId: 30,
          userId: 3,
        },
        {
          bookId: 40,
          userId: 3,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Favourites', null, {});
  },
};
