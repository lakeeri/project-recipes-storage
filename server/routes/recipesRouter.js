const express = require('express');

const router = express.Router();
const { Recipe, Ingredient } = require('../db/models');

router.get('/', async (req, res) => {
  const recipes = await Recipe.findAll({ include: { model: Ingredient } });
  res.send(recipes);
});

module.exports = router;
