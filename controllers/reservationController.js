const Reservation = require('../models/reservationModel.js');

exports.getAllReservation = async (req, res, next) => {
  const reservations = await Reservation.find().populate('products');

  res.status(200).json({
    staus: 'succes',
    data: {
      reservations,
    },
  });
};

exports.createReservation = async (req, res, next) => {
  const userOrdered = req.user;
  const products = req.body;
  const newReservation = await Reservation.create({
    userOrdered,
    products,
  });

  products.forEach(async product => {
    newReservation.products.push(product._id);
  });

  userOrdered.reservations.push(newReservation._id);
  await userOrdered.save();

  res.status(200).json({
    status: 'success',
    data: {
      newReservation,
    },
  });
};

exports.getReservation = (req, res, next) => {};

exports.updateReservation = (req, res, next) => {};

exports.deleteReservation = (req, res, next) => {};
