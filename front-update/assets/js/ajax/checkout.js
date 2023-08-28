async function checkout(e, { products }) {
  if (!products.length > 0) return alert('Please add some products');
  const token = JSON.parse(localStorage.getItem('token'));
  const productsID = products.map(product => ({ _id: product._id }));

  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/reservations',
    contentType: 'application/json',
    data: JSON.stringify(productsID),
    headers: {
      Authorization: `Bearer ${token}`,
    },
    success: function ({ data }) {
      const reservation = data.newReservation;
      localStorage.setItem('curReservation', JSON.stringify(reservation));
      window.location.href = 'success.html';
    },
    error: function (error) {
      console.log(error.responseText);
    },
  });
}

export { checkout };
