import { getProductByName } from './handlers/getProductByName';
import { renderProduct } from './handlers/rendersProduct';

$(document).ready(async function () {
    const productName = JSON.parse(localStorage.getItem('poduct-item'));
    renderProduct(getProductByName(productName));
})