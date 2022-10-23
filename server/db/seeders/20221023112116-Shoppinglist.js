module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ShoppingLists', [
      {
        name: 'Нут',
        weight: '200',
        unit: 'г',
        userid: 1,
      },
      {
        name: 'Абрикосы',
        weight: '10',
        unit: 'г',
        userid: 1,
      },
      {
        name: 'Оливковое масло',
        weight: '40',
        unit: 'г',
        userid: 1,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ShoppingLists', null, {});
  },
};
