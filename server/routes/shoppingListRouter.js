const express = require('express');
const { Op } = require('sequelize');

const router = express.Router();
const {
  Favourite, Recipe, ShoppingList,
} = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    try {
      const list = await ShoppingList.findAll(
        {
          where: { userid: res.locals.user.id, weight: { [Op.ne]: 0 } },
        },
      );
      res.json(list);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    const list = req.body.value;
    const currlist = list.map((el) => ({ ...el, userid: res.locals.user.id }));
    currlist.forEach(async (item) => {
      const {
        name, weight, unit, userid,
      } = item;
      const [newProduct, created] = await ShoppingList.findOrCreate({
        where: { name, userid: res.locals.user.id },
        defaults: { weight, unit, userid },
      });
      if (!created) {
        if (weight) {
          await ShoppingList.update({ weight: parseInt(weight, 10) + newProduct.weight }, { where: { name, userid: res.locals.user.id } });
        }
      }
    });
    const final = await ShoppingList.findAll(
      {
        where: { userid: res.locals.user.id, weight: { [Op.ne]: 0 } },
      },
    );
    res.json(final);
  })
  .patch(async (req, res) => {
    const list = req.body;
    list.forEach(async (item) => {
      const {
        name, weight,
      } = item;
      await ShoppingList.increment({
        weight: -weight,
      }, { where: { name, userid: res.locals.user.id } });
    });
    await ShoppingList.destroy({ where: { userid: res.locals.user.id, weight: { [Op.eq]: 0 } } });
    const final = await ShoppingList.findAll(
      {
        where: { userid: res.locals.user.id, weight: { [Op.ne]: 0 } },
      },
    );
    res.json(final);
  });

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await ShoppingList.destroy({ where: { id } });
  res.sendStatus(200);
});

module.exports = router;
