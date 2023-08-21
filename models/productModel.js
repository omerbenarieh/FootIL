const mongoose = require('mongoose');
const validator = require('validator');

const productSchema = new mongoose.Schema({
  company: { type: String, enum: ['Nike', 'Adidas'], required: true },

  size: {
    type: Number,
    validate: {
      validator: function (size) {
        return size >= 42 && size <= 45;
      },
      message: 'Invalid size for the selected model',
    },
    required: true,
  },
  price: {
    type: Number,
    validate: {
      validator: function (price) {
        return price > 0;
      },
    },
    message: 'Invalid price, Please insert a positive number.',
    required: true,
  },
  image: {
    type: String,
    default: 'product.jpg',
  },
});

module.exports = mongoose.model('Product', productSchema);
