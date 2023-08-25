async function getMyReservations() {
  const userID = JSON.parse(localStorage.getItem('user')).user._id;
  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'GET',
      url: `http://localhost:3000/api/users/${userID}`,
      contentType: 'application/json',
      success: function ({ data }) {
        resolve(data.reservations);
      },
      error: function (error) {
        reject(error);
      },
    });
  });
}

export { getMyReservations };
