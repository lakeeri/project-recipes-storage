const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
      {
        login: 'Tapac',
        email: 'tapac@mail.ru',
        password: await bcrypt.hash('123', 10),
      },
    ];
    await queryInterface.bulkInsert('Users', users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
