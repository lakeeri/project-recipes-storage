module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Ingredients', [
      {
        name: 'Нут',
        weight: '200',
        unit: 'г',
        recipeid: '1',
      },
      {
        name: 'Лимонный сок',
        weight: '10',
        unit: 'г',
        recipeid: '1',
      },
      {
        name: 'Оливковое масло',
        weight: '40',
        unit: 'г',
        recipeid: '1',
      },
      {
        name: 'Соль',
        weight: '10',
        unit: 'г',
        recipeid: '1',
      },
      {
        name: 'Зира',
        weight: '10',
        unit: 'г',
        recipeid: '1',
      },
      {
        name: 'Паприка копченая',
        weight: '10',
        unit: 'г',
        recipeid: '1',
      },
      {
        name: 'Кунжут',
        weight: '80',
        unit: 'г',
        recipeid: '1',
      },
      {
        name: 'Помидоры черри',
        weight: '45',
        unit: 'г',
        recipeid: '2',
      },
      {
        name: 'Сыр твердый',
        weight: '50',
        unit: 'г',
        recipeid: '2',
      },
      {
        name: 'Куриное филе',
        weight: '600',
        unit: 'г',
        recipeid: '2',
      },
      {
        name: 'Яйца куриные',
        weight: '200',
        unit: 'г',
        recipeid: '2',
      },
      {
        name: 'Оливковое масло',
        weight: '30',
        unit: 'г',
        recipeid: '2',
      },
      {
        name: 'Соус Цезарь',
        weight: '80',
        unit: 'г',
        recipeid: '2',
      },
      {
        name: 'Сухари ржаные',
        weight: '70',
        unit: 'г',
        recipeid: '2',
      },
      {
        name: 'Баранина',
        weight: '200',
        unit: 'г',
        recipeid: '3',
      },
      {
        name: 'Индейка филе',
        weight: '200',
        unit: 'г',
        recipeid: '3',
      },
      {
        name: 'Рис',
        weight: '370',
        unit: 'г',
        recipeid: '3',
      },
      {
        name: 'Морковь',
        weight: '200',
        unit: 'г',
        recipeid: '3',
      },
      {
        name: 'Лук репчатый',
        weight: '200',
        unit: 'г',
        recipeid: '3',
      },
      {
        name: 'Растительное масло',
        weight: '100',
        unit: 'мл',
        recipeid: '3',
      },
      {
        name: 'Чеснок',
        weight: '15',
        unit: 'г',
        recipeid: '3',
      },
      {
        name: 'Перец черный молотый',
        weight: '5',
        unit: 'г',
        recipeid: '3',
      },
      {
        name: 'Соль',
        weight: '7',
        unit: 'г',
        recipeid: '3',
      },
      {
        name: 'Лимоны',
        weight: '7',
        unit: 'г',
        recipeid: '3',
      },
      {
        name: 'Капуста белокочанная',
        weight: '150',
        unit: 'г',
        recipeid: '3',
      },
      {
        name: 'Помидоры',
        weight: '700',
        unit: 'г',
        recipeid: '4',
      },
      {
        name: 'Рис',
        weight: '85',
        unit: 'г',
        recipeid: '4',
      },
      {
        name: 'Лук зеленый',
        weight: '45',
        unit: 'г',
        recipeid: '4',
      },
      {
        name: 'Оливковое масло',
        weight: '75',
        unit: 'г',
        recipeid: '4',
      },
      {
        name: 'Соль',
        weight: '10',
        unit: 'г',
        recipeid: '4',
      },
      {
        name: 'Скумбрия',
        weight: '1500',
        unit: 'г',
        recipeid: '5',
      },
      {
        name: 'Лимоны',
        weight: '150',
        unit: 'г',
        recipeid: '5',
      },
      {
        name: 'Чеснок',
        weight: '12',
        unit: 'г',
        recipeid: '5',
      },
      {
        name: 'Кориандр',
        weight: '1',
        unit: 'г',
        recipeid: '5',
      },
      {
        name: 'Соль',
        weight: '10',
        unit: 'г',
        recipeid: '5',
      },
      {
        name: 'Перец черный молотый',
        weight: '10',
        unit: 'г',
        recipeid: '5',
      },
      {
        name: 'Творог 5%',
        weight: '220',
        unit: 'г',
        recipeid: 6,
      },
      {
        name: 'Яйца куриные',
        weight: '60',
        unit: 'г',
        recipeid: 6,
      },
      {
        name: 'Сахар',
        weight: '25',
        unit: 'г',
        recipeid: 6,
      },
      {
        name: 'Ржаная мука',
        weight: '75',
        unit: 'г',
        recipeid: 6,
      },
      {
        name: 'Соль',
        weight: '2',
        unit: 'г',
        recipeid: 6,
      },
      {
        name: 'Куриный бульон',
        weight: '3000',
        unit: 'г',
        recipeid: 7,
      },
      {
        name: 'Картофель',
        weight: '200',
        unit: 'г',
        recipeid: 7,
      },
      {
        name: 'Свекла',
        weight: '100',
        unit: 'г',
        recipeid: 7,
      },
      {
        name: 'Помидоры',
        weight: '200',
        unit: 'г',
        recipeid: 7,
      },
      {
        name: 'Лук репчатый',
        weight: '60',
        unit: 'г',
        recipeid: 7,
      },
      {
        name: 'Морковь',
        weight: '150',
        unit: 'г',
        recipeid: 7,
      },
      {
        name: 'Капуста белокочанная',
        weight: '400',
        unit: 'г',
        recipeid: 7,
      },
      {
        name: 'Картофель',
        weight: '1400',
        unit: 'г',
        recipeid: 8,
      },
      {
        name: 'Мясной фарш',
        weight: '500',
        unit: 'г',
        recipeid: 8,
      },
      {
        name: 'Сыр',
        weight: '150',
        unit: 'г',
        recipeid: 8,
      },
      {
        name: 'Лук репчатый',
        weight: '80',
        unit: 'г',
        recipeid: 8,
      },
      {
        name: 'Томатная паста',
        weight: '60',
        unit: 'г',
        recipeid: 8,
      },
      {
        name: 'Яйца куриные',
        weight: '60',
        unit: 'г',
        recipeid: 8,
      },
      {
        name: 'Капуста белокочанная',
        weight: '890',
        unit: 'г',
        recipeid: 9,
      },
      {
        name: 'Свиной фарш',
        weight: '500',
        unit: 'г',
        recipeid: 9,
      },
      {
        name: 'Лук репчатый',
        weight: '80',
        unit: 'г',
        recipeid: 9,
      },
      {
        name: 'Рис',
        weight: '150',
        unit: 'г',
        recipeid: 9,
      },
      {
        name: 'Яйца куриные',
        weight: '60',
        unit: 'г',
        recipeid: 9,
      },
      {
        name: 'Томатная паста',
        weight: '30',
        unit: 'г',
        recipeid: 9,
      },
      {
        name: 'Морковь',
        weight: '80',
        unit: 'г',
        recipeid: 9,
      },
      {
        name: 'Черешня',
        weight: '280',
        unit: 'г',
        recipeid: 10,
      },
      {
        name: 'Пшеничная мука',
        weight: '150',
        unit: 'г',
        recipeid: 10,
      },
      {
        name: 'Йогурт натуральный',
        weight: '100',
        unit: 'г',
        recipeid: 10,
      },
      {
        name: 'Вода',
        weight: '100',
        unit: 'мл',
        recipeid: 10,
      },
      {
        name: 'Яйца куриные',
        weight: '60',
        unit: 'г',
        recipeid: 10,
      },
      {
        name: 'Растительное масло',
        weight: '50',
        unit: 'мл',
        recipeid: 10,
      },
      {
        name: 'Какао-порошок',
        weight: '30',
        unit: 'г',
        recipeid: 10,
      },
      {
        name: 'Сахар ванильный',
        weight: '10',
        unit: 'г',
        recipeid: 10,
      },
      {
        name: 'Сахар',
        weight: '150',
        unit: 'г',
        recipeid: 10,
      },
      {
        name: 'Сода',
        weight: '12',
        unit: 'г',
        recipeid: 10,
      },
      {
        name: 'Разрыхлитель',
        weight: '5',
        unit: 'г',
        recipeid: 10,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Ingredients', null, {});
  },
};
