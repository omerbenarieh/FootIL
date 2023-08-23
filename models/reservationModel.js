const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  userOrdered: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  dateOfReservation: { type: Date, default: () => Date.now() },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
});

module.exports = mongoose.model('Reservation', reservationSchema);
