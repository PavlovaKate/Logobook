'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'People',
      [
        {
          image:
            'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop',
          title: 'Летняя распродажа любимых книг',
          link: '/sale',
        },
        {
          image: 'https://восход-сямженский.рф/media/project_smi3_829/17/95/8a/9c/f5/12/1.jpg',
          title: 'Выпускной у песцов',
          link: '/',
        },
        {
          image: 'https://s26162.pcdn.co/wp-content/uploads/2019/07/books.jpg',
          title: 'Хиты и бестселлеры в России',
          link: '/',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  },
};
