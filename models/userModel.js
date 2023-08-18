const mongoose = require('mongoose');
const validator = require('validator');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

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
    /* Remove comment when deploy

     validate: [validator.isStrongPassword, 'Please use a strong *password.'],*/

    select: false,
  },

  confirmPassword: {
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
    default: () => Date.now(),
    immutable: true,
  },
  passwordChangedAt: {
    type: Date,
    default: () => Date.now(),
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

  city: {
    type: String,
    default: 'Tel Aviv',
  },

  street: {
    type: String,
    default: 'Florentin',
  },

  houseNumber: {
    type: Number,
    default: 10,
  },

  floor: {
    type: Number,
    default: 10,
  },

  apartment: {
    type: Number,
    default: 10,
  },

  balance: {
    type: Number,
    default: 500,
  },



});

// Hashing the password when user created or when password is changed
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);

  this.confirmPassword = undefined;
  next();
});

// Check if the hashed input password is the corresponding DB hashed password
userSchema.methods.correctPassword = async function (password, hashPassword) {
  return await bcrypt.compare(password, hashPassword);
};

module.exports = mongoose.model('User', userSchema);
