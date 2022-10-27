const express = require('express');
const { Op } = require('sequelize');

const router = express.Router();
const { CountBase } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const products = await CountBase.findAll({ where: { userid: res.locals.user.id, weight: { [Op.gt]: 0 } }, order: [['id', 'DESC']] });
    return res.json(products);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.post('/', async (req, res) => {
  const {
    name, weight, unit, userid,
  } = req.body;
  const [newProduct, created] = await CountBase.findOrCreate({
    where: { name, userid: res.locals.user.id },
    defaults: { weight, unit, userid },
  });
  if (!created) {
    if (weight) {
      await CountBase.update({ weight: parseInt(weight, 10) + newProduct.weight }, { where: { name, userid: res.locals.user.id } });
    }
  }
  const products = await CountBase.findAll({ where: { userid: res.locals.user.id, weight: { [Op.gt]: 0 } }, order: [['id', 'ASC']] });
  return res.json(products);
});

router.post('/list', async (req, res) => {
  const arr = req.body;
  arr.forEach(async (item) => {
    const {
      name, weight, unit, userid,
    } = item;
    const [newProduct, created] = await CountBase.findOrCreate({
      where: { name, userid: res.locals.user.id },
      defaults: { weight, unit, userid },
    });
    if (!created) {
      if (weight) {
        await CountBase.update({ weight: parseInt(weight, 10) + newProduct.weight }, { where: { name, userid: res.locals.user.id } });
      }
    }
  });
  const products = await CountBase.findAll({ where: { userid: res.locals.user.id, weight: { [Op.gt]: 0 } } });
  res.json(products);
});

router.patch('/list', async (req, res) => {
  const arr = req.body;
  arr.forEach(async (item) => {
    const {
      name, weight, unit, userid,
    } = item;
    const [newProduct, created] = await CountBase.findOrCreate({
      where: { name, userid: res.locals.user.id },
      defaults: { weight, unit, userid },
    });
    if (!created) {
      if (weight) {
        await CountBase.update({ weight: parseInt(weight, 10) + newProduct.weight }, { where: { name, userid: res.locals.user.id } });
      }
    }
  });
  const products = await CountBase.findAll({ where: { userid: res.locals.user.id, weight: { [Op.gt]: 0 } } });
  res.json(products);
});

router.post('/list/delete/cooked', async (req, res) => {
  const { ingredients } = req.body;
  ingredients.forEach(async (item) => {
    const {
      name, weight, unit,
    } = item;
    const [newProduct, created] = await CountBase.findOrCreate({
      where: { name, userid: res.locals.user.id },
      defaults: {
        name, weight: -weight, unit, userid: res.locals.user.id,
      },
    });
    if (!created) {
      if (weight) {
        await CountBase.increment({
          weight: -item.weight,
        }, { where: { name: item.name, userid: res.locals.user.id } });
      }
    }
  });
  const products = await CountBase.findAll({ where: { userid: res.locals.user.id, weight: { [Op.gt]: 0 } }, order: [['id', 'DESC']] });
  res.json(products);
});

module.exports = router;
