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
  const idProduct = newProduct._id;

  res.status(201).json({
    status: 'success',
    idProduct,
    data: newProduct,
  });
});

exports.getProduct = catchAsync(async (req, res) => {
  const id = req.params.id;
  const product = await product.findById(id).select('-__v');
  res.status(200).json({
    status: 'success',
    data: product,
  });
});

exports.updateProduct = catchAsync(async (req, res) => {
  const id = req.params.id;
  const Product = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
  });
  res.status(204).json({
    status: 'success',
    data: user,
  });
});

exports.deleteProduct = catchAsync(async (req, res) => {
  const id = req.params.id;
  await Product.findByIdAndUpdate(
    id,
    { active: false },
    { runValidators: true }
  );
  res.status(410).json();
});
