const express = require('express');
const { Op } = require('sequelize');

const router = express.Router();
const { Recipe, Ingredient } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const recipes = await Recipe.findAll({ include: { model: Ingredient } });
    res.json(recipes);
  })
  .post(async (req, res) => {
    const { input } = req.body;
    const recipes = await Recipe.findAll({
      where: {
        name: {
          [Op.like]: `%${input}%`,
        },
      },
    });
    res.json(recipes);
  });

router.post('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const recipe = await Recipe.findOne({
    where: { id },
    include: { model: Ingredient },
  });
  res.json(recipe);
});

module.exports = router;
