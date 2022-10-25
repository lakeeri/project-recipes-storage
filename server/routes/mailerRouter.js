const express = require('express');
const mailer = require('../nodemailer');
const { ShoppingList } = require('../db/models');

const router = express.Router();

router.post('/', async (req, res) => {
  const shoppinglist = await ShoppingList.findAll({ where: { userid: req.session.user.id } });
  let textMessage = `Дорогой ${req.session.user.login}, лови твой список покупок:\n`;
  shoppinglist.forEach((item) => {
    textMessage += `- ${item.name} ${item.weight} ${item.unit}\n`;
  });

  const message = {
    to: req.session.user.email,
    subject: 'ShoppingList',
    text: textMessage,
  };
  mailer(message);
  res.sendStatus(200);
});

module.exports = router;
