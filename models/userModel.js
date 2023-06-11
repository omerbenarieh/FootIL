const mongoose = require("mongoose");
const validator = require("validator");
const crypto = require("crypto");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "User must have a name."],
    trim: true,
  },
  email: {
    type: String,
    require: [true, "User must have an email."],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email."],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password."],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords should be the same!",
    },
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
    default: "default.jpg",
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },

  address: {
    type: String,
    city: String,
    street: String,
    houseNumber: Number,
    floor: Number,
    apartment: Number,
  },

  //need to add list of product model
  balance: Number,
});

module.exports = userSchema;
