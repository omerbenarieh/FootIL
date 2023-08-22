import { getAllProducts } from './ajax.js';
import { renderProducts } from './renderProcuts.js';

$(document).ready(async function () {
  const res = await getAllProducts();
  const products=res.data.products;
  renderProducts(products);
  

  // Event listener for company filter
  $('#company-filter').change(function () {
    const selectedCompany = $(this).val();
    if (selectedCompany) {
      const filteredProducts = products.filter(product => product.company === selectedCompany);
      renderProducts(filteredProducts);
    } else 
        renderProducts(products); 
  });

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
