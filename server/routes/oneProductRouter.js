const express = require('express');

const router = express.Router();
const { Product } = require('../db/models');

router.post('/', async (req, res) => {
  try {
    const { value } = req.body;
    const oneProduct = await Product.findOne({ where: { name: value } });
    res.json(oneProduct);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
