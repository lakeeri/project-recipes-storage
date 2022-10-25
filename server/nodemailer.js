const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport(
  {
    pool: true,
    host: 'smtp.yandex.ru',
    socketTimeout: 100000,
    port: 465,
    secure: true,
    auth: {
      user: process.env.DB_USER_MAIL,
      pass: process.env.DB_PASS_MAIL,
    },
  },
  {
    from: 'Recipes-storage <Recipes-storage@yandex.ru>',
  },
);

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    return console.log('Email sent: ', info);
  });
};

module.exports = mailer;
