import { signupBody } from './bodymaker.js';

async function signup(e) {
  e.preventDefault();
  const url = 'http://localhost:3000/api/users/signup';
  $.ajax({
    type: 'POST',
    url,
    ContentType: 'application/json',
    data: signupBody(),
    success: function (data) {
      const isAdmin = data.user.role === 'admin';
      const user = { isLoggedIn: true, isAdmin, user: data.user };
      localStorage.setItem('user', JSON.stringify(user));
      window.location.href = 'home.html';
    },
    error: function (error) {
      alert(error.responseText);
    },
  });
}

export { signup };
