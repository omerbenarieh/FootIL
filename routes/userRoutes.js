const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router.post('/login', userController.checkLogin);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
