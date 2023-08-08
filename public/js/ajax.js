import utils from './utils.js';
import { signupBody, loginBody } from './_body.js';

async function login(e) {
  e.preventDefault();

  const url = 'http://localhost:3000/api/users/login';
  $.ajax({
    type: 'POST',
    url,
    ContentType: 'application/json',
    data: loginBody(),
    success: async function (data) {
      const username = data.user.name.split(' ')[0];
      utils.displayLoggedUser(`Hello ${username} ! You are logged in ! :)`);
    },
    error: function (error) {
      utils.displayLoginError(error.responseText);
    },
  });
}

async function signup(e) {
  e.preventDefault();

  const url = 'http://localhost:3000/api/users/signup';
  $.ajax({
    type: 'POST',
    url,
    ContentType: 'application/json',
    data: signupBody(),
    success: function (data) {
      const username = data.user.name.split(' ')[0];
      utils.displayLoggedUser(`Hello ${username} ! You are logged in ! :)`);
    },
    error: function (error) {
      utils.displaySignupError(error.responseText);
    },
  });
}

export { login, signup };
