const User = require('../models/userModel');

const Product = require('../models/productModel');

const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

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
    return next(new AppError('Please provide an email and password', 404));

  // Check if user exist in DB. (based on email)
  const user = await User.findOne({ email }).select('+password');
  if (!user) return next(new AppError('User does not exist.', 404));

  // Check if the password that inserted matching the hashPassword in DB.
  const correct = await user.correctPassword(password, user.password);
  if (!correct) return next(new AppError('Incorrect email or password', 404));

  const token = signToken(user._id);

  res.status(200).json({
    status: 'success',
    token,
    user,
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  // 1) Getting token and check if exist
  const authorization = req.headers.authorization;
  let token;
  if (authorization && authorization.startsWith('Bearer'))
    token = authorization.split(' ')[1];

  if (!token)
    return next(
      new AppError('You are not logged in!, Please log in to get access.', 404)
    );

  // 2) Verification token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  next();
});
