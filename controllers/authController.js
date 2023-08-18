const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const coookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.cookie('jwt', token, coookieOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    user,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);
  createSendToken(user, 201, res);
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

  createSendToken(user, 200, res);
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

  // 3) Check if user still exists
  const freshUser = await User.findById(decoded.id);
  if (!freshUser) {
    return next(
      new AppError('The user belonging to this token does no longer exist', 401)
    );
  }

  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = freshUser;
  next();
});

exports.isAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin')
    return next(new AppError('This Route is only For Logged in Admins.', 404));
  next();
};
