import { renderCart } from './handlers/renderCart.js';

const products = JSON.parse(localStorage.getItem('products'));

$(document).ready(function () {
  renderCart(products);
  $('#checkout-btn').click(() => console.log('TEST'));
});
