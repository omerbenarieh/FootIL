const Product = require('../models/productModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllProducts = catchAsync(async (req, res) => {
  let products;
  if (req.query) products = await Product.find(req.query).select('-__v');
  else products = await Product.find({ active: true }).select('-__v');
  res.status(200).json({
    status: 'success',
    data: {
      results: products.length,
      products,
    },
  });
});

exports.createProduct = catchAsync(async (req, res, next) => {
  const newProduct = await Product.create(req.body);
  res.status(201).json({
    status: 'success',
    data: newProduct,
  });
});

exports.getProduct = catchAsync(async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id).select('-__v');
  res.status(200).json({
    status: 'success',
    data: product,
  });
});

exports.getProductByName = catchAsync(async (req, res) => {
  const name = req.params.name;
  const product = await Product.find(name).select('-__v');
  res.status(200).json({
    status: 'success',
    data: product,
  });
});


exports.updateProduct = catchAsync(async (req, res) => {
  const id = req.params.id;
  const product = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
  });
  res.status(204).json({
    status: 'success',
    data: product,
  });
});

exports.deleteProduct = catchAsync(async (req, res) => {
  const id = req.params.id;
  await Product.findByIdAndDelete(id);
  res.status(410).json();
});
