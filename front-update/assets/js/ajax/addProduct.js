import { productBody } from './bodymaker.js';

async function addProduct(e) {
  const index = e.target.id.charAt(e.target.id.length - 1);
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/products',
    data: productBody(index),
    ContentType: 'application/json',
    success: function (product) {
      const newProduct = product.data;
      const productsData = JSON.parse(localStorage.getItem('products'));
      const products = productsData.products;
      products.push(newProduct);
      productsData.products = products;
      localStorage.setItem('products', JSON.stringify(productsData));
    },
    error: function (error) {
      console.log(error.responseText);
    },
  });
}

export { addProduct };
