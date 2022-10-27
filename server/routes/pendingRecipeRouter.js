const express = require('express');

const router = express.Router();
const { Favourite, Recipe, Ingredient } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    try {
      const pends = await Favourite.findAll(
        {
          where: { userid: res.locals.user.id, pending: true },
          include: { model: Recipe, include: { model: Ingredient } },
        },
      );
      res.json(pends);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    const { id } = req.body;
    const [favProduct, created] = await Favourite.findOrCreate({
      where: { userid: res.locals.user.id, recipeId: id },
      defaults: { userid: res.locals.user.id, pending: true, recipeId: id },
    });
    if (!created) {
      if (id) {
        await Favourite.update({ pending: true }, { where: { userid: res.locals.user.id, recipeId: id } });
      }
    }
    const pends = await Favourite.findAll(
      {
        where: { userid: res.locals.user.id, pending: true },
        include: { model: Recipe, include: { model: Ingredient } },
      },
    );
    res.json(pends);
  })
  .delete(async (req, res) => {
    const { id } = req.body;
    await Favourite.update({ pending: false }, { where: { userid: res.locals.user.id, recipeId: id } });
    const pends = await Favourite.findAll(
      {
        where: { userid: res.locals.user.id, pending: true },
        include: { model: Recipe, include: { model: Ingredient } },
      },
    );
    res.json(pends);
  });

module.exports = router;
