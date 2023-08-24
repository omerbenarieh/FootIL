async function getAllUsers() {
  return new Promise((resolve, reject) => {
    const url = 'http://localhost:3000/api/users';
    const token = JSON.parse(localStorage.getItem('token'));

    $.ajax({
      type: 'GET',
      url,
      contentType: 'application/json',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      success: function ({ data }) {
        const users = data.users;
        resolve(users); // Resolve the promise with users
      },
      error: function (error) {
        reject(error); // Reject the promise with the error
      },
    });
  });
}

export { getAllUsers };
