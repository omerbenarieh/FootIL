import utils from './utils.js';
import { signupBody, loginBody } from './_body.js';

async function login(e) {
  e.preventDefault();
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/users/login',
    ContentType: 'application/json',
    data: loginBody(),
    success: function (user) {
      utils.displayLoggedUser(`Welcome to Foot-IL, ${user.data[0].name} :)`);
    },
    error: function () {
      utils.displayLoginError('There was an error while trying to login :(');
    },
  });
}

async function signup(e) {
  e.preventDefault();

  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/users',
    ContentType: 'application/json',
    data: signupBody(),
    success: function () {
      utils.clearFields('name', 'new_password', 'new_email', 'confirmPassword');
      utils.hideForm('signup-container');
      utils.displayForm('login-container');
    },
    error: function () {
      utils.displaySignupError('There was an error while trying to signup :(');
    },
  });
}

export { login, signup };
