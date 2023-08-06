// Declarations///////////
//////////////////////////

$('#login').click(loginUser);
$('#signup').click(signUpUser);

//////////////////////////
//////////////////////////

// Event Listeners Callbacks//////////////////
//////////////////////////////////////////////

async function loginUser(e) {
  e.preventDefault();
  buildLoginForm();
  hideMainButtons();

  $('#login-btn').click(attachLoginListener);
}

async function signUpUser(e) {
  e.preventDefault();
  console.log(e.target);
}

//////////////////////////////////////////////
//////////////////////////////////////////////

/// Building HTML handlers ///////////////////
//////////////////////////////////////////////
const buildLoginForm = () => {
  if ($('#login-container').html().trim() !== '') return;
  const html = `
  <h1>Login Form</h1>
    <form id="loginForm">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required /><br />

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required /><br />

        <button type="button" id="login-btn"/>Login</button>
    </form>`;

  $('#login-container').html(html);
  displayLoginForm($('#login-container'));
};

//////////////////////////////////////////////
//////////////////////////////////////////////

// Handler Functions //////////////////////
///////////////////////////////////////////

function hideMainButtons() {
  $('#login').hide();
  $('#signup').hide();
}

function displayMainButtons() {
  $('#login').show();
  $('#signup').show();
}

function displayLoginForm(loginForm) {
  loginForm.show();
}

function hideLoginForm(loginForm) {
  loginForm.hide();
}

function displayLoggedUser(username) {
  hideLoginForm($('#login-container'));
  $('#cur-user').text(`Hello ${username}! Welcome to Foot-IL :)`);
  $('#cur-user').show();
  hideLoginError();
}

function displayLoginError() {
  alert(`Incorrect Email / Password... Please Try Again.`);
}

function hideLoginError() {
  $('#err-log').hide();
}

function clearFields(...fields) {
  fields.forEach(field => {
    $(`#${field}`).val('');
  });
}

//////////////////////////////////////////////
//////////////////////////////////////////////

/////// AJAX Calls Handlers //////////////////
//////////////////////////////////////////////
async function attachLoginListener(e) {
  e.preventDefault();
  const email = $('#email')[0].value;
  const password = $('#password')[0].value;
  clearFields('email', 'password');

  const body = {
    email,
    password,
  };

  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/users/login',
    ContentType: 'application/json',
    data: body,
    success: function (user) {
      displayLoggedUser(user.data[0].name);
    },
    error: function (err) {
      displayLoginError();
    },
  });
}

//////////////////////////////////////////////
//////////////////////////////////////////////
