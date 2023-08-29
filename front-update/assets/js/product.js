import { renderProduct } from './handlers/rendersProduct.js';

$(document).ready(async function () {
    const product = JSON.parse(localStorage.getItem('product-item'));
    renderProduct(product);
});