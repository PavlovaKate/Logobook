'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Andrey',
          email: 'andrey6446@yandex.ru',
          password: '$2b$10$TucrXRPlbe.C8uq8RNLWL.6WPLRFgSJXSG8JvxWpfLg.YZYUrMwMa',
          image:
            'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3l5eXZ6dTJpMWtndm8yZGplOG9kbzR2NHFxZmQ1ZjV1OG4zZ2tjZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aQwvKKi4Lv3t63nZl9/giphy.gif',
        },
        {
          name: 'Admin',
          email: 'admin@admin.com',
          isAdmin: true,
          password: '$2b$10$TucrXRPlbe.C8uq8RNLWL.6WPLRFgSJXSG8JvxWpfLg.YZYUrMwMa',
          image:
            'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3l5eXZ6dTJpMWtndm8yZGplOG9kbzR2NHFxZmQ1ZjV1OG4zZ2tjZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aQwvKKi4Lv3t63nZl9/giphy.gif',
        },
        {
          name: 'Nastya',
          email: 'azarovan13@yandex.ru',
          password: '$2b$10$TucrXRPlbe.C8uq8RNLWL.6WPLRFgSJXSG8JvxWpfLg.YZYUrMwMa',
          image:
            'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
        },
        {
          name: 'Misha',
          email: 'andrey6446@ya.ru',
          password: '$2b$10$TucrXRPlbe.C8uq8RNLWL.6WPLRFgSJXSG8JvxWpfLg.YZYUrMwMa',
          image: 'https://pics.craiyon.com/2023-07-07/579e523aca6a48ec8c7729dfed888f87.webp',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
