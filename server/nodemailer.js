const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    pool: true,
    host: 'smtp.yandex.ru',
    socketTimeout: 100000,
    port: 465,
    secure: true,
    auth: {
      user: 'Recipes-storage',
      pass: 'yvwdihmancjlgzys',
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
