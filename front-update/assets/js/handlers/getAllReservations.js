async function getAllReservations() {
  return new Promise(function (resolve, reject) {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/api/reservations',
      contentType: 'application/json',
      success: function (data) {
        resolve(data.data.reservations);
      },
      error: function (error) {
        reject(error);
      },
    });
  });
}

export { getAllReservations };
