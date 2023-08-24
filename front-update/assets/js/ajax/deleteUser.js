async function deleteUser(id) {
  const url = `http://localhost:3000/api/users/${id}`;
  const token = JSON.parse(localStorage.getItem('token'));
  $.ajax({
    type: 'DELETE',
    url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    contentType: 'application/json',
    success: function (data) {
      alert(`User has been deleted Successfully ! :)`);
    },
    error: function (error) {
      console.log(error);
    },
  });
}

export { deleteUser };
