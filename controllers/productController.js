const Product = require('../models/productModel');

exports.getAllProducts = async (req, res) => {
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
};

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await product.findById(id).select('-__v');
  res.status(200).json({
    status: 'success',
    data: product,
  });
};


exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  const Product = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
  });
  res.status(204).json({
    status: 'success',
    data: user,
  });
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  await Product.findByIdAndUpdate(id, { active: false }, { runValidators: true });
  res.status(410).json();
};

=======
exports.updateProducts = (req, res) => {
  res.send('Update Product');
};
// TODO
