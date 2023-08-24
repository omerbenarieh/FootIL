async function deleteUser(id) {
  const url = `http://localhost:3000/api/users/${id}`;
  const token = JSON.parse(localStorage.getItem('token'));
  $.ajax({
    type: 'DELETE',
    url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    contentType: 'aplication/json',
    success: function () {
      alert('User deleted Successfully ! :)');
    },
    error: function (error) {
      alert(error.responseText);
    },
  });
}

export { deleteUser };
