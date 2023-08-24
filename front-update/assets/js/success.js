import { createPost } from './Facebook.js';

$(document).ready(async function () {
  const user = JSON.parse(localStorage.getItem('user')).user;
  await createPost(`New order has been made by ${user.name} !!`);
  const container = document.getElementById('container');
  container.innerHTML = '';
  const products = JSON.parse(localStorage.getItem('products')).products;
  products.forEach(product => {
    const company = product.company;
    const image = `assets/img/${company}/${product.image}`;
    const card = ` 
    <li class="list-group-item">
                
    <div
      class="media align-items-lg-center flex-column flex-lg-row p-3"
    >
      <div class="media-body order-2 order-lg-1">
        <h4 class="mt-0 font-weight-bold mb-2" id="product-name">
          ${product.name}
        </h4>
  
        <div
          class="d-flex align-items-center justify-content-between mt-1"
        >
          <h5 class="font-weight-bold my-2" id="product-price">
            $${product.price}
          </h5>
        </div>
        <div
          class="d-flex align-items-center justify-content-between mt-1"
        >
        </div>
      </div>
      <img
        src="${image}"
        alt="Generic placeholder image"
        width="200"
        class="ml-lg-5 order-1 order-lg-2"
        id="product-img"
      />
    </div>
    
  </li>`;
    container.innerHTML += card;
  });
});
