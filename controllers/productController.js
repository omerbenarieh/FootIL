exports.getAllProducts = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: 'ALL PRODUCTS',
  });
};
exports.updateProducts = (req, res) => {
  res.send('Update Product');
};
// TODO
