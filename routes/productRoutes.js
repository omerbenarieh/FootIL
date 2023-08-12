const express = require('express');
const productController = require('../controllers/productController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', authController.protect, productController.getAllProducts);

module.exports = router;


// Creating product
router.post('/addProduct', authController.addProduct);

//search product
router.post('/search', productController.getProductsSearch);

// cart user
router.post('/cart', authController.cart);

router
    .route('/:id')
    .get(productController.getProduct)
    .patch(productController.updateProduct)
    .delete(productController.deleteProduct);

module.exports = router;