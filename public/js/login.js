$('#login-btn').click(loginUser);

async function loginUser(e) {
  e.preventDefault();

  const body = {
    email: $('#email')[0].value,
    password: $('#password')[0].value,
  };

  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/users/login',
    contentType: 'application/json',
    data: JSON.stringify(body),
    success: user => {
      // user is from DB in json format.
      if (user.status === 'success') {
        const userName = user.data[0].name;
        console.log(`${userName} Logged in !`);
        window.location.href = '/';
      } else {
        alert('Your email or password are wrong.. Please try again :)');
        $('#email')[0].value = '';
        $('#password')[0].value = '';
      }
    },
  });
}
