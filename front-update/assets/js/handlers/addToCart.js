import { addProduct } from '../ajax/addProduct.js';

async function attachAddToCart(index) {
  for (let i = 0; i < index; i++) {
    $(`#add-${i}`).click(addProduct);
  }
}

export { attachAddToCart };
