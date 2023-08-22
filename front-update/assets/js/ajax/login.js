import { loginBody } from './bodymaker.js';

async function login(e) {
  e.preventDefault();
  const url = 'http://localhost:3000/api/users/login';

  $.ajax({
    type: 'POST',
    url,
    data: loginBody(),
    ContentType: 'application/json',
    success: function (data) {
      const isAdmin = data.user.role === 'admin';
      const user = { isLoggedIn: true, isAdmin };
      localStorage.setItem('user', JSON.stringify(user));
      window.location.href = 'home.html';
    },
    error: function (error) {
      console.log(error);
      alert(error.responseText);
    },
  });
}

export { login };
