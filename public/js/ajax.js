import utils from './utils.js';
import { signupBody, loginBody } from './_body.js';

const url = 'http://localhost:3000/api';

let token;
async function login(e) {
  e.preventDefault();

  const curUrl = `${url}/users/login`;
  $.ajax({
    type: 'POST',
    url: curUrl,
    ContentType: 'application/json',
    data: loginBody(),
    success: async function (data) {
      const username = data.user.name.split(' ')[0];
      token = data.token;
      utils.displayLoggedUser(`Hello ${username} ! You are logged in ! :)`);
      getAllUsers();
    },
    error: function (error) {
      utils.displayLoginError(error.responseText);
    },
  });
}

async function signup(e) {
  e.preventDefault();

  const curUrl = `${url}/users/signup`;
  $.ajax({
    type: 'POST',
    url: curUrl,
    ContentType: 'application/json',
    data: signupBody(),
    success: function (data) {
      token = data.token;
      const username = data.user.name.split(' ')[0];
      utils.displayLoggedUser(`Hello ${username} ! You are logged in ! :)`);
    },
    error: function (error) {
      utils.displaySignupError(error.responseText);
    },
  });
}

async function getAllUsers(e) {
  e.preventDefault();

  console.log(token);
  const curUrl = `${url}/users`;
  console.log(curUrl);
  $.ajax({
    type: 'GET',
    url: curUrl,
    ContentType: 'application/json',
    headers: {
      authorization: `Bearer ${token}`,
    },

    success: function (data) {
      console.log(data.data.users);
    },
    error: function (error) {},
  });
}

export { login, signup, getAllUsers };
