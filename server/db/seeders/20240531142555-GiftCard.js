'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'GiftCards',
      [
        {
          amount: 1000,
          color: 'darkGreen',
        },
        {
          amount: 2000,
          color: 'darkGreen',
        },
        {
          amount: 5000,
          color: 'darkGreen',
        },
        {
          amount: 1000,
          color: 'lightGreen',
        },
        {
          amount: 2000,
          color: 'lightGreen',
        },
        {
          amount: 5000,
          color: 'lightGreen',
        },
        {
          amount: 1000,
          color: 'Yellow',
        },
        {
          amount: 2000,
          color: 'Yellow',
        },
        {
          amount: 5000,
          color: 'Yellow',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('GiftCards', null, {});
  },
};
