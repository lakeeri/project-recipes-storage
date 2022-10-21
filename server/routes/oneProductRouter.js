const express = require('express');

const router = express.Router();
const { Product } = require('../db/models');

router.post('/', async (req, res) => {
  const { value } = req.body;
  const oneProduct = await Product.findOne({ where: { name: value } });
  res.json(oneProduct);
});

module.exports = router;
