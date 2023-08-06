$('#signup-btn').click(signUp);

async function signUp(e) {
  e.preventDefault();

  const body = {
    name: $('#name').val(),
    email: $('#email').val(),
    password: $('#password').val(),
    passwordConfirm: $('#confirm_password').val(),
  };

  $.ajax({
    url: 'http://localhost:3000/api/users',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(body),
    success: function (user) {
      console.log(user);
      window.location.href = '/';
    },
    error: function (error) {
      console.error('Error:', error);
    },
  });
}
