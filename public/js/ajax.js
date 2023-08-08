import utils from './utils.js';
import { signupBody, loginBody } from './_body.js';

async function login(e) {
  e.preventDefault();

  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/users/login',
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

  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/users/signup',
    ContentType: 'application/json',
    data: signupBody(),
    success: function (data) {
      console.log(data);
      utils.clearFields('name', 'new_password', 'new_email', 'confirmPassword');
      utils.displayLoggedUser('Good ! You are logged in ! :)');
    },
    error: function () {
      utils.displaySignupError('There was an error while trying to signup :(');
    },
  });
}

export { login, signup };
