const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(
    authController.protect,
    authController.isAdmin,
    userController.getAllUsers
  );

// Creating user
router.post('/signup', authController.signup);

// Login user
router.post('/login', authController.login);

router
  .route('/:id')
  .get(authController.protect, userController.getUser)
  .patch(authController.protect, userController.updateUser)
  .delete(
    authController.protect,
    authController.isAdmin,
    userController.deleteUser
  );

module.exports = router;
