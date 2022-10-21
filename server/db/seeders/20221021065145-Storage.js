module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Storages', [
      {
        name: 'Нут',
        weight: '200',
        unit: 'г',
      },
      {
        name: 'Лимонный сок',
        weight: '10',
        unit: 'г',
      },
      {
        name: 'Оливковое масло',
        weight: '40',
        unit: 'г',
      },
      {
        name: 'Соль',
        weight: '10',
        unit: 'г',
      },
      {
        name: 'Зира',
        weight: '10',
        unit: 'г',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Storages', null, {});
  },
};
