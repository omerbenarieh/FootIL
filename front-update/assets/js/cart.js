import { renderCart } from './handlers/renderCart.js';
import { checkout } from './ajax/checkout.js';

$(document).ready(function () {
  // Check if logged in
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user && !user.isLoggedIn) return;

  const products = JSON.parse(localStorage.getItem('products'));
  renderCart(products);

  $('#checkout-btn').click(function (e) {
    e.preventDefault();
    checkout(e, products);
  });
});
