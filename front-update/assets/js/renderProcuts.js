function renderProducts(products) {
  const cardContainer = document.getElementById('cards');
  let currentCardGroup = null;
  const productsArray = products.data.products;

  const cardGroup = document.querySelector('.card-group');

  productsArray.forEach((product, index) => {
    const company = product.company;
    const name = product.name;
    const image = `assets/img/${company}/${product.image}`;
    const size = product.size;
    const price = product.price;

    const card = `
    <div class="card">
    <div class="card-body">
      <img
        id="product-img"
        src="${image}"
        style="margin-left: 0px; height: 150px; width: 200px"
      />
      <h3 class="text-center card-title" id="product-name">
        ${name}
      </h3>
      <h4 class="text-center" id="product-price">${price}$</h4>
      <div class="filter">
        <form>
          <select id="quantity">
            <option value="">Select Quantity</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
          </select>
          <select id="size">
            <option value="">Select Size</option>
            <option value="">42</option>
            <option value="">43</option>
            <option value="">44</option>
            <option value="">45</option>
          </select>
        </form>
      </div>
      <button
        class="btn btn-primary"
        id="add-to-cart-btn"
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
  });
}

export { renderProducts };
