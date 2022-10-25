const express = require('express');

const router = express.Router();
const { CountBase } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    try {
      const count = await CountBase.findAll({ where: { userid: res.locals.user.id } });
      res.json(count);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    const value = req.body;
    // console.log('-------------', req.body);
    const currlist = value.map((el) => ({ ...el, userid: res.locals.user.id }));
    currlist.forEach(async (item) => {
      const {
        name, weight, unit,
      } = item;
      const [newProduct, created] = await CountBase.findOrCreate({
        where: { name, userid: res.locals.user.id },
        defaults: { weight, unit, userid: res.locals.user.id },
      });
      if (!created) {
        if (weight) {
          await CountBase.update({ weight: parseInt(weight, 10) + newProduct.weight }, { where: { name, userid: res.locals.user.id } });
        }
      }
    });
    const final = await CountBase.findAll(
      {
        where: { userid: res.locals.user.id },
      },
    );
    res.json(final);
  });
//   .delete(async (req, res) => {
//     const { id } = req.body;
//     const middle = await Middle.findAll({ where: { recipeid: id, userid: res.locals.user.id } });
//     await Middle.destroy({ where: { recipeid: id, userid: res.locals.user.id } });
//     res.json(middle);
//   });

module.exports = router;
