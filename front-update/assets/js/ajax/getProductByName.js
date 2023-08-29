async function getProductByName(productName) {
    const url = `http://localhost:3000/api/products?name=${productName}`;
    const token = JSON.parse(localStorage.getItem('token'));
    return new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url,
            ContentType: 'application/json',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            success: function (product) {
                resolve(product);
            },
            error: function (error) {
                reject(error.responseText);
            },
        });
    });
}

export { getProductByName };
