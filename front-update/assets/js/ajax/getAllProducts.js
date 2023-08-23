async function getAllProducts(e) {
  const url = 'http://localhost:3000/api/products';
  const token = JSON.parse(localStorage.getItem('token'));
  console.log(token);
  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'GET',
      url,
      ContentType: 'application/json',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      success: function (products) {
        resolve(products);
      },
      error: function (error) {
        reject(error.responseText);
      },
    });
  });
}

export { getAllProducts };
