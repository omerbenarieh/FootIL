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
    type: String,
    city: String,
    street: String,
    houseNumber: Number,
    floor: Number,
    apartment: Number,
    unique:false,
  },
});

module.exports = mongoose.model('Reservation', reservationSchema);
