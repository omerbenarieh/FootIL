const catchAsync = require('../utils/catchAsync');

exports.getHomePage = catchAsync(async (req, res, next) => {
  res.status(200).render('home');
});

exports.signUp = catchAsync(async (req, res, next) => {
  res.status(200).render('signup');
});

exports.login = catchAsync(async (req, res, next) => {
  res.status(200).render('login');
});
