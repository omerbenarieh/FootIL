const User = require('../models/userModel');

exports.getAllUsers = (req, res) => {
  res.status(200).send('ALL USERS');
};

exports.getUser = (req, res) => {
  res.status(200).send(`Got user ${req.params.id}`);
};

exports.createUser = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: req.body,
  });
};

exports.updateUser = (req, res) => {
  res.status(200).send(`User ${req.params.id} has been updated.`);
};

exports.deleteUser = (req, res) => {
  res.status(200).send(`User ${req.params.id} has been deleted.`);
};
