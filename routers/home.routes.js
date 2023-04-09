const router = require('express').Router();

const { homeController } = require('../controllers');

router.get('/', homeController.get.home);
router.get('/about', homeController.get.about);

module.exports = router;
