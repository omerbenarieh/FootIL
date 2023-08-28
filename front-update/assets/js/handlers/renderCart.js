function renderCart({ products }) {
  const container = document.getElementById('items');
  const summaryContainer = document.getElementById('summary');
  container.innerHTML = '';
  products.forEach(product => {
    const company = product.company;
    const name = product.name;
    const size = product.size;
    const price = product.price;
    const image = `assets/img/${company}/${product.image}`;

    const card = `
    <div class="product">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-3">
          <div class="product-image">
            <img
              class="img-fluid d-block mx-auto image rounded-circle"
              id="product-img"
              src="${image}"
            />
          </div>
        </div>
        <div class="col-md-5 product-info">
          <p id="product-company" class="product-company text-black">
            ${company}
          </p>
          <p id="product-name" class="product-name">
            ${name}
          </p>
          <div class="product-specs">
            <div>
              <span>Size:&nbsp;</span
              ><span id="product-size" class="value">${size}</span>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-2 quantity">
        </div>
        <div class="col-6 col-md-2 price">
          <span id="product-price">$${price}</span>
        </div>
      </div>
    </div>`;
    container.innerHTML += card;
  });

  const totalCost = products.reduce(
    (accumulator, product) => accumulator + product.price,
    0
  );

  const summary = `
      <div class="summary"
            style="
              margin-right: 10px;
              margin-left: 10px;
              margin-top: 10px;
              margin-bottom: 10px;
            "
          >
            <h3>Summary</h3>
            <h4><span class="text"></span></h4>
            <h4 style="margin-bottom: 12px">
              <span class="text">Total:&nbsp;</span
              ><span id="total-price" class="price">$${totalCost}</span>
            </h4>
            <a
              class="btn btn-primary btn-lg text-center text-bg-info d-block w-75"
              role="button"
              id="checkout-btn"
              >Checkout</a
            >
            </div>`;

  summaryContainer.innerHTML += summary;
}

export { renderCart };
