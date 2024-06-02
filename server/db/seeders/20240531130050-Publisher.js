'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Publishers',
      [
        { name: 'Litres' },
        { name: 'Альпина Паблишер' },
        { name: 'Рипол Классик' },
        { name: 'Directmedia' },
        { name: 'Laitman Kabbalah Publishers' },
        { name: 'Азбука-Аттикус' },
        { name: '"Манн, Иванов и Фербер"' },
        { name: 'Sudarynia' },
        { name: 'Умма - Достоверно!' },
        { name: 'ООО ДиректМедиа' },
        { name: 'ГЭОТАР-Медиа' },
        { name: 'Нова Книга' },
        { name: 'NeMe' },
        { name: 'Blake Pierce' },
        { name: 'Strelbytskyy Multimedia Publishing' },
        { name: '"Издательство ""Проспект"""' },
        { name: 'Rithm-time' },
        { name: 'Новое Литературное Обозрение' },
        { name: 'epubli' },
        { name: 'ООО «ИЗДАТЕЛЬСКИЙ   ДОМ «САМОКАТ» ' },
        { name: 'Freedom Letters' },
        { name: 'Dmitry Glukhovskiy' },
        { name: 'МОЗАИКА-СИНТЕЗ' },
        { name: 'ОЛМА Медиа Групп' },
        { name: 'Издательство ИКСИ' },
        { name: 'Манн, Иванов и Фербер' },
        { name: 'Book on Demand - T8 Russian Titles' },
        { name: '"Издательский дом ""Питер"""' },
        { name: 'Bohlau Verlag' },
        { name: 'Lindhardt og Ringhof' },
        { name: 'Студия Артемия Лебедева' },
        { name: 'БХВ-Петербург' },
        { name: 'Denis Pikunov' },
        { name: 'Phantom Press' },
        { name: 'Интернет-магазин ForVu' },
        { name: 'Createspace Independent Publishing Platform' },
        { name: 'No Kidding Press' },
        { name: 'Google Play Books' },
        { name: 'Digest Media, Попурри' },
        { name: 'Ad Marginem' },
        { name: 'Pinhok Languages via PublishDrive' },
        { name: 'Время' },
        { name: 'Michael Kuzmin' },
        { name: 'FTM' },
        { name: 'Издательство Вече' },
        { name: 'Principis' },
        { name: 'DirectMEDIA' },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Publishers', null, {});
  },
};
