const User = require('../models/userModel');
const { use } = require('../routes/userRoutes');
const catchAsync = require('../utils/catchAsync');

exports.checkLogin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.find({ email, password });
  if (user.length > 0)
    res.status(200).json({
      status: 'success',
      data: user,
    });
  else
    res.status(404).json({
      status: 'error',
    });
};

exports.getAllUsers = async (req, res) => {
  let users;
  if (req.query) users = await User.find(req.query).select('-__v');
  else users = await User.find({ active: true }).select('-__v');
  res.status(200).json({
    status: 'success',
    data: {
      results: users.length,
      users,
    },
  });
};

exports.getUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id).select('-__v');
  res.status(200).json({
    status: 'success',
    data: user,
  });
};

exports.createUser = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);
  res.status(201).json({
    status: 'success',
    data: user,
  });
});

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findByIdAndUpdate(id, req.body, {
    runValidators: true,
  });
  res.status(204).json({
    status: 'success',
    data: user,
  });
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  await User.findByIdAndUpdate(id, { active: false }, { runValidators: true });
  res.status(410).json();
};
