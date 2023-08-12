const User = require('../models/userModel');
const AppError = require('../utils/appError');

exports.getAllUsers = async (req, res) => {
  const users = await User.find().select('-__v');
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
  await User.findByIdAndDelete(id);
  res.status(410).json();
};
