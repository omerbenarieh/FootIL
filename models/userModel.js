const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'User must have a name.'],
    trim: true,
    minlength: 4,
  },
  email: {
    type: String,
    required: [true, 'User must have an email.'],
    trim: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email.'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password.'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords should be the same!',
    },
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  image: {
    type: String,
    default: 'default.jpg',
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },

  address: {
    type: String,
    city: String,
    street: String,
    houseNumber: Number,
    floor: Number,
    apartment: Number,
  },

  // need to add list of product model
  balance: {
    type: Number,
    default: 500,
  },
});
module.exports = mongoose.model('User', userSchema);
