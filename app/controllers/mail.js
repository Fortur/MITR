'use strict';

exports.sendEmail = (req, res) => {
  const nodemailer = require('nodemailer');

  const mail='dastrateg@bk.ru';
  const pass='PASS';

  nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
      host: 'smtp.mail.ru',
      port: 465,
      secure: true,
      auth: {
        user: mail,
        pass: pass
      }
    });

    let message = ` 
    <ul>
    <li> <b>Мероприятие: ${req.body.ivent? req.body.ivent: 'не выбрано'}</b> </li>
    <li> Имя, фамилия: ${req.body.FI}</li>
    <li> Возраст: ${req.body.age}</li>
    <li> Образование: ${req.body.edu}</li>
    <li> Область проф. интересов: ${req.body.interests}</li>
    <li> Опыт в стартапах: ${req.body.startup}</li>
    <li> Телефон: ${req.body.phone}</li>
    <li> E-mail: ${req.body.email}</li>
    </ul>
    `;

    // setup email data with unicode symbols
    let mailOptions = {
      from: `"Современный ИТ-рекрутинг" <${mail}>`,
      to: 'hr@da-strateg.ru',
      subject: 'Заявка ✔',
      html: message
    };

    // send mail with defined transport object
    if (!!req.body.phone || !!req.body.email) {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        res.redirect('/');
      });
    }
  });

};