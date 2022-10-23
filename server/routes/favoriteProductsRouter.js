const express = require('express');

const router = express.Router();
const { Favourite, Recipe, Ingredient } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const products = await Favourite.findAll(
      {
        where: { userid: res.locals.user.id },
        include: { model: Recipe, include: { model: Ingredient } },
      },
    );
    res.json(products);
  })
  .post(async (req, res) => {
    const { id } = req.body;
    await Favourite.create({ recipeId: id, userid: res.locals.user.id });
    const favs = await Favourite.findAll(
      {
        where: { userid: res.locals.user.id },
        include: { model: Recipe, include: { model: Ingredient } },
      },
    );
    res.json(favs);
  })
  .delete(async (req, res) => {
    const { id } = req.body;
    await Favourite.destroy({
      where: {
        recipeId: id,
      },
    });
    const favs = await Favourite.findAll(
      {
        where: { userid: res.locals.user.id },
        include: { model: Recipe, include: { model: Ingredient } },
      },
    );
    res.json(favs);
  })
  .put(async (req, res) => {
    const { id } = req.body;
    const fav = await Favourite.findOne({
      where: { recipeId: id, userid: res.locals.user.id },
    });
    console.log(fav);
    await Favourite.update(
      { pending: !fav.pending },
      {
        where: { recipeId: id, userid: res.locals.user.id },
      },
    );
    const favs = await Favourite.findAll(
      {
        where: { userid: res.locals.user.id },
        include: { model: Recipe, include: { model: Ingredient } },
      },
    );
    res.json(favs);
  });

module.exports = router;
