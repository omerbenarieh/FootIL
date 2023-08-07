const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

  const token = signToken(newUser._id);

  res.status(201).json({
    status: 'success',
    token,
    data: newUser,
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  // Check if user insert email and password
  if (!email || !password)
    return next(new Error('Please provide an email and password'));

  // Check if user exist in DB. (based on email)
  const user = await User.findOne({ email }).select('+password');
  if (!user) return next(new Error('User does not exist.'));

  // Check if the password that inserted matching the hashPassword in DB.
  const correct = await user.correctPassword(password, user.password);
  if (!correct) return next(new Error('Incorrect email or password'));

  const token = signToken(user._id);

  res.status(200).json({
    status: 'success',
    token,
  });
});
