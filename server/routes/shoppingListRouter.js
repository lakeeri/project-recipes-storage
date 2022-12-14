const express = require('express');

const router = express.Router();
const {
  Favourite, Recipe, Ingredient, ShoppingList,
} = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const list = await ShoppingList.findAll(
      {
        where: { userid: res.locals.user.id },
      },
    );
    res.json(list);
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
        where: { userid: res.locals.user.id },
      },
    );
    res.json(final);
  });
//   .delete(async (req, res) => {
//     const { id } = req.body;
//     await Favourite.destroy({
//       where: {
//         recipeId: id,
//       },
//     });
//     const favs = await Favourite.findAll(
//       {
//         where: { userid: res.locals.user.id },
//         include: { model: Recipe, include: { model: Ingredient } },
//       },
//     );
//     res.json(favs);
//   });

module.exports = router;
