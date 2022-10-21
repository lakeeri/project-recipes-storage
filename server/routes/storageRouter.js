const express = require('express');

const router = express.Router();
const { Storage } = require('../db/models');

router.get('/', async (req, res) => {
  const products = await Storage.findAll({ where: { userid: res.locals.user.id }, order: [['id', 'DESC']] });
  res.json(products);
});

router.post('/', async (req, res) => {
  const {
    name, weight, unit, userid,
  } = req.body;
  const [newProduct, created] = await Storage.findOrCreate({
    where: { name, userid: res.locals.user.id },
    defaults: { weight, unit, userid },
  });
  if (!created) {
    if (weight) {
      await Storage.update({ weight: parseInt(weight, 10) + newProduct.weight }, { where: { name } });
    }
  }
  const products = await Storage.findAll({ where: { userid: res.locals.user.id }, order: [['id', 'ASC']] });
  return res.json(products);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Storage.destroy({ where: { id } });
  res.sendStatus(200);
});

module.exports = router;
