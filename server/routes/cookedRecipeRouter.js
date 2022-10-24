const express = require('express');

const router = express.Router();
const { Favourite, Recipe, Ingredient } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    try {
      const cooks = await Favourite.findAll(
        {
          where: { userid: res.locals.user.id, cooked: true },
          include: { model: Recipe, include: { model: Ingredient } },
        },
      );
      return res.json(cooks);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    const { id } = req.body;
    const [cookedProduct, created] = await Favourite.findOrCreate({
      where: { userid: res.locals.user.id, recipeId: id },
      defaults: { userid: res.locals.user.id, cooked: true, recipeId: id },
    });
    if (!created) {
      if (id) {
        await Favourite.update({ cooked: true }, { where: { userid: res.locals.user.id, recipeId: id } });
      }
    }
    const favs = await Favourite.findAll(
      {
        where: { userid: res.locals.user.id, cooked: true },
        include: { model: Recipe, include: { model: Ingredient } },
      },
    );
    res.json(favs);
  })
  .delete(async (req, res) => {
    const { id } = req.body;
    await Favourite.update({ cooked: false }, { where: { userid: res.locals.user.id, recipeId: id } });
    const favs = await Favourite.findAll(
      {
        where: { userid: res.locals.user.id, cooked: true },
        include: { model: Recipe, include: { model: Ingredient } },
      },
    );
    res.json(favs);
  });

module.exports = router;
