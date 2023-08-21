import { signupBody, loginBody } from './bodymaker.js';

const url = 'http://localhost:3000/api';

let token;

async function signup(e) {
  e.preventDefault();

  const curUrl = `${url}/users/signup`;
  $.ajax({
    type: 'POST',
    url: curUrl,
    ContentType: 'application/json',
    data: signupBody(),
    success: function (data) {
      console.log(data);
      token = data.token;
      const username = data.user.name.split(' ')[0];
      console.log(username);
      window.location.href = 'index.html';
    },
    error: function (error) {
      alert(error.responseText);
    },
  });
}

async function login(e) {
  e.preventDefault();
  const curUrl = `${url}/users/login`;

  $.ajax({
    type: 'POST',
    url: curUrl,
    data: loginBody(),
    ContentType: 'application/json',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    success: function (data) {
      token = data.token;

      const isAdmin = data.user.role === 'admin';
      const user = { isLoggedIn: true, isAdmin };
      localStorage.setItem('user', JSON.stringify(user));
      window.location.href = 'index.html';
    },
    error: function (error) {
      alert(error.responseText);
    },
  });
}

export { login, signup };
