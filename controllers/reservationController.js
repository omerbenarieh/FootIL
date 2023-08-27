const Reservation = require('../models/reservationModel.js');
const Product = require('../models/productModel.js');

exports.getAllReservation = async (req, res, next) => {
  const reservations = await Reservation.find()
    .populate('products')
    .populate('userOrdered');

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
  let totalPrice = 0;

  // Use Promise.all to wait for all asynchronous operations to complete
  await Promise.all(
    products.map(async product => {
      const pricePerProduct = await Product.findOne({ _id: product._id });
      totalPrice += pricePerProduct.price;
    })
  );

  const newReservation = await Reservation.create({
    userOrdered,
    products,
    totalPrice,
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
