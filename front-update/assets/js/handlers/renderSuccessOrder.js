import { formatDate } from './formatDate.js';
function renderSuccessOrder() {
  const container = document.getElementById('container');
  const user = JSON.parse(localStorage.getItem('user')).user.name;
  container.innerHTML = '';
  $('#username-title').text(`Hello ${user}!, Here is your order :)`);

  //////////////////
  // Formate Date

  const reservation = JSON.parse(
    localStorage.getItem('curReservation')
  ).dateOfReservation;

  const totalPrice = JSON.parse(
    localStorage.getItem('curReservation')
  ).totalPrice;
  $('#totalPrice').html(`<h4>Total cost: ${totalPrice}</h4>`);

  const formatted = formatDate(reservation);
  container.innerHTML += `<h4 class="mb-4 mt-4">Date: ${formatted.formattedDate}, Time: ${formatted.formattedTime}</h4>`;

  /////////////////////
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
        <h4 class="text-lowercase mt-0 font-weight-bold mb-2 " id="product-name">
          ${product.name}
        </h4>
        <h3></h3>
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
        width="130"
        class="ml-lg-5 order-1 order-lg-2 rounded-circle"
        id="product-img"
      />
    </div>
  </li>`;
    container.innerHTML += card;
  });
}

export { renderSuccessOrder };
