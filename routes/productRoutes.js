const express = require('express');
const productController = require('../controllers/productController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', authController.protect, productController.getAllProducts);

module.exports = router;


// Creating product
router.post(
    '/create', authController.protect, productController.createProduct
);

// cart user
router.post('/cart', authController.cart);

router
    .route('/:id')
    .get(productController.getProduct)
    .patch(productController.updateProduct)
    .delete(productController.deleteProduct);

module.exports = router;