const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: [true, "Must have unique reservation id"],
  },

  date: Date,

  user: {
    //refarance
  },

  products: {
    //users products,
  },

  status: {
    arrived: ["true", "false"],
  },
});
