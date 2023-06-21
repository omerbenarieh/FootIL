const express = require('express');
const reservationController = require('../controllers/orderController');
const router = express.Router();
router
    .route('/')
    .get(orderController.getAllReservations)
    .post(orderController.createReservation);

router
    .route('/:reservationId')
    .get(orderController.getReservation)
    .put(orderController.updateReservation)
    .delete(orderController.deleteReservation);
module.exports = router;
