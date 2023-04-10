const router = require('express').Router();

const { translationsController } = require('../controllers');

router.post('/', translationsController.post.create);

module.exports = router;
