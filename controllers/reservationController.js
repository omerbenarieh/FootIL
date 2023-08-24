const Reservation = require('../models/reservationModel.js');

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
  const products = req.body;
  const newReseravtion = await Reservation.create({
    userOrdered,
    products,
  });

  products.forEach(async product => {
    newReseravtion.products.push(product._id);
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

exports.getBrandSales = async (req, res, next) => {
  try {
    const brandSales = await Reservation.aggregate([
      { $unwind: "$products" },
      {
        $lookup: {
          from: "products",
          localField: "products",
          foreignField: "_id",
          as: "productDetails"
        }
      },
      { $unwind: "$productDetails" },
      { $group: { _id: "$productDetails.company", count: { $sum: 1 } } }
    ]);

    let result = {};
    brandSales.forEach(item => {
      result[item._id] = item.count;
    });

    res.status(200).json(result);

  } catch (error) {
    console.error("Error fetching brand sales data", error);
    res.status(500).json({ status: "fail", message: "Internal server error" });
  }
};

exports.getBrandSales = (req, res, next) => { };

exports.getReservation = (req, res, next) => { };

exports.updateReservation = (req, res, next) => { };

exports.deleteReservation = (req, res, next) => { };
