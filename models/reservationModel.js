const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: [true, 'Must have a unique reservation id'],
  },

  date: Date,

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  }],
  status: {
    arrived: {
      type: Boolean,
      default: false,
    },
  },

  address: {
    type: String,
    city: String,
    street: String,
    houseNumber: Number,
    floor: Number,
    apartment: Number,
    unique: false,
  },
});

module.exports = mongoose.model('Reservation', reservationSchema);
