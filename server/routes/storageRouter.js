const express = require('express');

const router = express.Router();
const { Storage } = require('../db/models');

router.get('/', async (req, res) => {
  const products = await Storage.findAll();
  res.json(products);
});

router.post('/', async (req, res) => {
  const {
    name, weight, unit, userid,
  } = req.body;
  console.log('++++++++', req.body);
  const [newProduct, created] = await Storage.findOrCreate({
    where: { name },
    defaults: { weight, unit, userid },
  });
  if (created) {
    await Storage.update(req.body.weight, { where: { name } });
    const oneProduct = await Storage.findOne({ where: { name } });
    return res.json(oneProduct);
  }
  return res.json(newProduct);
});

module.exports = router;
