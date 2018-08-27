const config = require('../../config');
const email = require('emailjs/email');

const server = email.server.connect({
    user: 'parrot11@mail.ru',
    password: 'QWERTYUIOP',
    host: 'smtp.mail.ru',
    ssl: true
});

/**
 * Отправка письма на почту
 * @param {Object} message 
 */
exports.sendEmail = message => {

  server.send({
    text:    "i hope this works",
    from:    "<parrot11@mail.ru>",
    to:      "<andrey.daa.97@mail.ru>",
    cc:      "<andrey.daa.97@mail.ru>",
    subject: "testing emailjs"
  }, function(err, message) { console.log(err || message); });
}
