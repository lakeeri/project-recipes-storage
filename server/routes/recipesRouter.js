const express = require('express');
const { Op } = require('sequelize');

const router = express.Router();
const { Recipe, Ingredient } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    try {
      const recipes = await Recipe.findAll({ include: { model: Ingredient } });
      return res.json(recipes);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    const { input } = req.body;
    const recipes = await Recipe.findAll({
      where: {
        name: {
          [Op.like]: `%${input[0].toUpperCase()}${input.slice(1).toLowerCase()}%`,
        },
      },
    });
    res.json(recipes);
  });

router.post('/:id', async (req, res) => {
  const { id } = req.params;
  const recipe = await Recipe.findOne({
    where: { id },
    include: { model: Ingredient },
  });
  res.json(recipe);
});

module.exports = router;
