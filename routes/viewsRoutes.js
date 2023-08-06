const express = require('express');
const viewsController = require('../controllers/viewsController');

const router = express.Router();

router.get('/', viewsController.getHomePage);

router.get('/signup', viewsController.signUp);
router.get('/login', viewsController.login);

module.exports = router;
