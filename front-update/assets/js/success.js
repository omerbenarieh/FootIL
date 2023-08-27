import { createPost } from './Facebook.js';

import { renderSuccessOrder } from './handlers/renderSuccessOrder.js';

$(document).ready(async function () {
  const user = JSON.parse(localStorage.getItem('user')).user;
  await createPost(`New order has been made by ${user.name} !!`);
  renderSuccessOrder();
  localStorage.removeItem('products');
});
