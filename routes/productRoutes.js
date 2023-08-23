const express = require('express');
const productController = require('../controllers/productController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router
  .route('/:id')
  .get(authController.protect, productController.getProduct)
  .patch(productController.updateProduct)
  .delete(
    authController.protect,
    authController.isAdmin,
    productController.deleteProduct
  );

module.exports = router;
