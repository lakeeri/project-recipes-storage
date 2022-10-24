const express = require('express');

const router = express.Router();
const { Product } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
