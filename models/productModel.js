const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
  productName: String,

  companyName: {
    type: String,
    require: [true, 'Company must have a name.'],
    trim: true,
  },

  image: {
    type: String,
    default: 'default-img.jpg',
  },

  size: {
    require: [true, 'Shoe must have a size.'],
    type: Number,
    min: 35,
    max: 50,
  },

  color: String,

  price: Number,
});

module.exports = mongoose.model('Product', productSchema);
