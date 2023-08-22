async function getAllProducts(e) {
  const url = 'http://localhost:3000/api/products';

  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'GET',
      url,
      ContentType: 'application/json',
      success: function (products) {
        resolve(products); // Resolve the promise with the fetched products
      },
      error: function (error) {
        reject(error); // Reject the promise with the error
      },
    });
  });
}

export { getAllProducts };
