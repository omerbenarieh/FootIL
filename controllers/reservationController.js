const Reservation = require('../models/reservationModel');

exports.getAllReservation = async (req, res, next) => {
  const reservations = await Reservation.find();

  res.status(200).json({
    staus: 'succes',
    data: {
      reservations,
    },
  });
};

exports.createReservation = async (req, res, next) => {
  const userOrdered = req.user;
  const products = req.body.products;
  const newReseravtion = await Reservation.create({
    userOrdered,
    products,
  });

  userOrdered.reservations.push(newReseravtion._id);
  await userOrdered.save();

  res.status(200).json({
    status: 'success',
    data: {
      newReseravtion,
    },
  });
};

exports.getReservation = (req, res, next) => {};

exports.updateReservation = (req, res, next) => {};

exports.deleteReservation = (req, res, next) => {};
