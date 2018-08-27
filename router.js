let express = require('express'),
    router = express.Router(),

    mainController = require('./app/controllers/main'),
    pageController = require('./app/controllers/page'),
    send=require('./app/controllers/mail');

router.get('/lang',pageController.swapLang);

router.get('/', mainController.getMainPage);
router.get('/:alias', pageController.getPage);

router.post('/feedback', send.sendEmail);


module.exports = router;