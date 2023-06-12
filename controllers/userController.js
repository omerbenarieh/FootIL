const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
  const users = await User.find({ active: true }).select('-__v');
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
  const user = await User.findById(id);
  res.status(200).json({
    status: 'success',
    data: user,
  });
};

exports.createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({
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
  await User.findByIdAndUpdate(id, { active: false }, { runValidators: true });
  res.status(410).json();
};
