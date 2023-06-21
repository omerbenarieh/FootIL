const mongoose = require('mongoose');
const reservationSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: [true, 'Must have unique reservation id'],
  },

  date: Date,

  user: {
    // Referrence
  },

  products: {
    //User product,
  },

  status: {
    arrived: ['true', 'false'],
  },
  address: {
    Type: String,
    unique: false,
  }
});

module.exports = mongoose.model('Reservation', reservationSchema);
