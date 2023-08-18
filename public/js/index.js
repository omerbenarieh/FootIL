//--- Imports ---\\
import utils from './utils.js';
import { login, signup } from './ajax.js';

$(document).ready(() => {
  //--- Attach Event Listerens ---\\
  $('#login').click(loginUser);
  $('#signup').click(signUpUser);

  $('#login-btn').click(login);
  $('#signup-btn').click(signup);

  //--- Listeners Callbacks ---\\
  async function loginUser(e) {
    e.preventDefault();
    utils.hideButtons('signup', 'login');
    utils.displayForm('login-container');
  }

  async function signUpUser(e) {
    e.preventDefault();
    utils.hideButtons('signup', 'login');
    utils.displayForm('signup-container');
  }
});
