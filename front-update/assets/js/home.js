import { getAllProducts } from './ajax.js';
import { renderProducts } from './renderProcuts.js';

$(document).ready(async function () {
  const res = await getAllProducts();
  console.log(res.data);
  renderProducts(res);

  const user = JSON.parse(localStorage.getItem('user'));

  // Check if user is loggedIn
  if (user && user.isLoggedIn) {
    if (user.isAdmin) $('#admin-page').removeClass('visually-hidden');
    else $('#user-page').removeClass('visually-hidden');

    $('#signup-btn').hide();
    $('#login-btn').hide();
    $('#logout-btn').removeClass('visually-hidden');
  }

  $('#logout-btn').click(function () {
    localStorage.removeItem('user');
    $('#signup-btn').show();
    $('#login-btn').show();
    $('#admin-page').addClass('visually-hidden');
    $('#user-page').addClass('visually-hidden');
    $('#logout-btn').addClass('visually-hidden');
    window.location.href = 'index.html';
  });
});
