const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync.js');
exports.getAllUsers = async (req, res) => {
  const users = await User.find()
    .select('-__v')
    .populate({
      path: 'reservations',
      populate: {
        path: 'products',
      },
    });
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
  const user = await User.findById(id)
    .select('-__v')
    .populate({
      path: 'reservations',
      populate: {
        path: 'products',
      },
    });
  res.status(200).json({
    status: 'success',
    data: user,
  });
};

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    status: 'success',
    data: user,
  });
};

exports.deleteUser = catchAsync(async (req, res) => {
  const id = req.params.id;
  await User.findByIdAndDelete(id);
  res.status(204).json();
});
