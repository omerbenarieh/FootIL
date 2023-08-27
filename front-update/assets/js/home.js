// Imports
import { getAllProducts } from './ajax/getAllProducts.js';
import { renderProducts } from './handlers/renderProducts.js';

$(document).ready(async function () {
  const res = await getAllProducts();
  const products = res.data.products;

  renderProducts(products);
  // Filters
  $('#company-filter').change(companyFilter);
  $('#size-filter').change(sizeFilter);
  $('#price-filter').change(priceFilter);

  const user = JSON.parse(localStorage.getItem('user'));
  // Check if user is loggedIn
  if (user && user.isLoggedIn) {
    if (user.isAdmin) $('#admin-page').removeClass('visually-hidden');
    else $('#user-page').removeClass('visually-hidden');

    $('#signup-btn').hide();
    $('#login-btn').hide();
    $('#logout-btn').removeClass('visually-hidden');
  }

  localStorage.setItem('products', JSON.stringify({ products: [] }));
  $('#cart-btn').click(function (e) {
    e.preventDefault();
    if (!user) {
      alert('Please log in :)');
      window.location.reload();
    } else window.location.href = '../../cart.html';
  });

  $('#logout-btn').click(function () {
    localStorage.removeItem('user');
    localStorage.removeItem('products');
    localStorage.removeItem('token');
    $('#signup-btn').show();
    $('#login-btn').show();
    $('#admin-page').addClass('visually-hidden');
    $('#user-page').addClass('visually-hidden');
    $('#logout-btn').addClass('visually-hidden');
    window.location.href = 'home.html';
  });

  // Handlers
  function companyFilter() {
    const selectedCompany = $(this).val();
    if (selectedCompany) {
      const filteredProducts = products.filter(
        product => product.company === selectedCompany
      );
      renderProducts(filteredProducts);
    } else renderProducts(products);
  }
  function sizeFilter() {
    const selectedSize = $(this).val();
    if (selectedSize) {
      const filteredProducts = products.filter(
        product => product.size === Number(selectedSize)
      );
      renderProducts(filteredProducts);
    } else renderProducts(products);
  }

  function priceFilter() {
    const selectedPrice = $(this).val();
    if (selectedPrice) {
      const filteredProducts = products.filter(
        product => product.price === Number(selectedPrice)
      );
      renderProducts(filteredProducts);
    } else renderProducts(products);
  }
  document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '7hpOaMEbwt2q9OtrdnmRZa21z3BjcSBs';
    const apiUrl = 'https://api.stockdio.com/visualization/financial/charts/v1/SingleQuote';

    function fetchStockPrice(symbol) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${apiUrl}?symbol=${symbol}&apiKey=${apiKey}`, true);
        xhr.onload = () => {
          if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            resolve(data.stockPrice);
          } else {
            reject(new Error(`Request failed with status: ${xhr.status}`));
          }
        };
        xhr.onerror = () => {
          reject(new Error('Request failed'));
        };
        xhr.send();
      });
    }

    fetchStockPrice('nike')
      .then(nikeStockPrice => {
        const nikeStockElement = document.getElementById('nike-stock');
        nikeStockElement.textContent = `$${nikeStockPrice.toFixed(2)}`;
      })
      .catch(error => {
        console.error('Error fetching Nike data:', error);
      });

    fetchStockPrice('adidas')
      .then(adidasStockPrice => {
        const adidasStockElement = document.getElementById('adidas-stock');
        adidasStockElement.textContent = `$${adidasStockPrice.toFixed(2)}`;
      })
      .catch(error => {
        console.error('Error fetching Adidas data:', error);
      });
  });

});


