'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Shops',
      [
        {
          shopName: 'Logobook на Литейном',
          adress: 'Литейный просп., 57',
          latitude: 59.934442,
          longitude: 30.347771,
          workTime: '10:00 - 22:00',
        },
        {
          shopName: 'Logobook на Невском',
          adress: 'Невский просп., 28',
          latitude: 59.935888,
          longitude: 30.325873,
          workTime: '08:00 - 18:00',
        },
        {
          shopName: 'Logobook на Сенной',
          adress: 'ул. Ефимова, 3С',
          latitude: 59.924941,
          longitude: 30.320374,
          workTime: '09:00 - 19:00',
        },
        {
          shopName: 'Logobook Elbrus',
          adress: 'Лиговский просп., 140',
          latitude: 59.91377,
          longitude: 30.35078,
          workTime: '10:00 - 20:00',
        },
        {
          shopName: 'Logobook на Ваське',
          adress: 'Средний просп. Васильевского острова, 32',
          latitude: 59.942597,
          longitude: 30.278274,
          workTime: '09:00 - 20:00',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Shops', null, {});
  },
};
