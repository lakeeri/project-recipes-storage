const express = require('express');

const router = express.Router();
const { Middle } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    try {
      const middle = await Middle.findAll({ where: { userid: res.locals.user.id } });
      res.json(middle);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    const middles = req.body.input;
    middles.forEach(async (item) => {
      const {
        name, weight, unit, recipeid,
      } = item;
      await Middle.create({
        name, weight, unit, userid: res.locals.user.id, recipeid,
      });
    });
    const final = await Middle.findAll({ where: { userid: res.locals.user.id } });
    res.json(final);
  })
  .delete(async (req, res) => {
    const { id } = req.body;
    const middle = await Middle.findAll({ where: { recipeid: id, userid: res.locals.user.id } });
    await Middle.destroy({ where: { recipeid: id, userid: res.locals.user.id } });
    res.json(middle);
  });

module.exports = router;
