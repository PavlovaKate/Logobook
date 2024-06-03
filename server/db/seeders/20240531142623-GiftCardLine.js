'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'GiftCardLines',
      [
        {
          giftCardId: 1,
          cartId: 1,
        },
        {
          giftCardId: 2,
          cartId: 2,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('GiftCardLines', null, {});
  },
};
