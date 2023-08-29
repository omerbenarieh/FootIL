
function handleProductClick(event) {
    const productName = $(this).data('product-name'); // Using jQuery to get data attribute
    localStorage.getItem('product-name', JSON.stringify(productName));
    window.location.href = 'product.html';
}

export { handleProductClick };


