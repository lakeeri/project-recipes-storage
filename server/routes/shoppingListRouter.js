const express = require('express');

const router = express.Router();
const { ShoppingList } = require('../db/models');

router.get('/', async (req, res) => {
  const list = await ShoppingList.findAll(
    {
      where: { userid: res.locals.user.id },
    },
  );
  res.json(list);
});

module.exports = router;
