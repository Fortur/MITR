let express = require('express'),
    router = express.Router(),

    mainController = require('./app/controllers/main'),
    pageController = require('./app/controllers/page'),
    feedbackController = require('./app/controllers/feedback');


router.get('/lang',pageController.swapLang);

router.get('/', mainController.getMainPage);
router.get('/:alias', pageController.getPage);

router.post('/feedback', feedbackController.sendFeedback);


module.exports = router;