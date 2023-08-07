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
      console.log('Good ! You are logged in ! :)');
    },
    error: function (error) {
      utils.displayLoginError(
        'Incorrect email or password, Please try again...'
      );
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
