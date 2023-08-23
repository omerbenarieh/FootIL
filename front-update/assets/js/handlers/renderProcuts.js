import { attachAddToCart } from '../handlers/addToCart.js';

function renderProducts(products) {
  const cardContainer = document.getElementById('cards');
  cardContainer.innerHTML = '';
  let currentCardGroup = null;
  let i;
  products.forEach((product, index) => {
    const company = product.company;
    const name = product.name;
    const image = `assets/img/${company}/${product.image}`;
    const price = product.price;

    const card = `
    <div class="card">
    <div class="card-body">
      <img
        id="product-img-${index}"
        src="${image}"
        style="margin-left: 0px; height: 150px; width: 200px"
      />
      <h3 class="text-center card-title" id="product-company-${index}">
        ${company}
      </h3>
      <h4 class="text-center card-title" id="product-name-${index}">
        ${name}
      </h4>
      <h4 class="text-center" id="product-price-${index}">${price}$</h4>
      <h5 id="product-size-${index}">size ${product.size}</h5>
      <div class="filter">
      </div>
      <button
        class="btn btn-primary"
        id="add-${index}"
        type="button"
        style="margin-left: 14px"
      >
        add to cart
      </button>
    </div>
  </div>`;

    if (index % 3 === 0) {
      currentCardGroup = document.createElement('div');
      currentCardGroup.classList.add('card-group');
      cardContainer.appendChild(currentCardGroup);
    }

    if (currentCardGroup) {
      currentCardGroup.innerHTML += card;
    }
    i = index;
  });
  attachAddToCart(i);
}

export { renderProducts };
