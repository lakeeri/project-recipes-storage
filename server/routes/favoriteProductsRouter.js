const express = require('express');
const { Op } = require('sequelize');

const router = express.Router();
const { Favourite, Recipe, Ingredient } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    try {
      const products = await Favourite.findAll(
        {
          where: { userid: res.locals.user.id, fav: true },
          include: { model: Recipe, include: { model: Ingredient } },
        },
      );
      return res.json(products);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    const { id } = req.body;
    const [favProduct, created] = await Favourite.findOrCreate({
      where: { userid: res.locals.user.id, recipeId: id },
      defaults: { userid: res.locals.user.id, fav: true, recipeId: id },
    });
    if (!created) {
      if (id) {
        await Favourite.update({ fav: true }, { where: { userid: res.locals.user.id, recipeId: id } });
      }
    }
    const favs = await Favourite.findAll(
      {
        where: { userid: res.locals.user.id, fav: true },
        include: { model: Recipe, include: { model: Ingredient } },
      },
    );
    res.json(favs);
  })
  .delete(async (req, res) => {
    const { id } = req.body;
    await Favourite.update({ fav: false }, { where: { userid: res.locals.user.id, recipeId: id } });
    const favs = await Favourite.findAll(
      {
        where: { userid: res.locals.user.id, fav: true },
        include: { model: Recipe, include: { model: Ingredient } },
      },
    );
    res.json(favs);
  });

router.post('/filter', async (req, res) => {
  const { input } = req.body;
  try {
    const favs = await Favourite.findAll(
      {
        where: { userid: res.locals.user.id, fav: true },
        include: { model: Recipe, include: { model: Ingredient } },
      },
    );
    const favourites = favs.filter((el) => el.Recipe.name.toLowerCase().includes(input.toLowerCase()));
    res.json(favourites);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
