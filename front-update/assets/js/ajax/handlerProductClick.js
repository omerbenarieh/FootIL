import { productBody } from './bodymaker.js';

async function handleProductClick(e, id) {

    const index = e.target.id.charAt(e.target.id.length - 1);

    $.ajax({
        type: 'GET',
        url: `http://localhost:3000/api/products/${id}`,
        data: productBody(index),
        ContentType: 'application/json',
        success: function (product) {
            const newProduct = product.data;
            localStorage.setItem('product-item', JSON.stringify(newProduct));
            window.location.href = "../product.html";
        },
        error: function (error) {
            console.log(error.responseText);
        },
    });
}

export { handleProductClick };


