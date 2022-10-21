const express = require('express');

const router = express.Router();
const { Product } = require('../db/models');

router.get('/', async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

module.exports = router;
