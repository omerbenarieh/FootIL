// Declarations //////////////////////////////
//////////////////////////////////////////////

$('#login').click(loginUser);
$('#signup').click(signUpUser);

//////////////////////////////////////////////
//////////////////////////////////////////////

// Event Listeners Callbacks//////////////////
//////////////////////////////////////////////

async function loginUser(e) {
  e.preventDefault();
  hideMainButtons();
  displayForm($('#login-container'));

  $('#login-btn').click(attachLoginListener);
}

async function signUpUser(e) {
  e.preventDefault();
  hideMainButtons();
  displayForm($('#signup-container'));

  $('#signup-btn').click(attachSignupListener);
}

//////////////////////////////////////////////
//////////////////////////////////////////////

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

function displayForm(form) {
  form.show();
}

function hideForm(form) {
  form.hide();
}

function displayLoggedUser(username) {
  hideForm($('#login-container'));
  $('#cur-user').text(`Hello ${username}! Welcome to Foot-IL :)`);
  $('#cur-user').show();
  hideLoginError();
}

function displayLoginError() {
  alert(`Incorrect Email / Password... Please Try Again.`);
}

function displaySignupError() {
  alert('Please fill the fields again');
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
  const email = $('#email').val();
  const password = $('#password').val();
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
    error: function () {
      displayLoginError();
    },
  });
}

async function attachSignupListener(e) {
  e.preventDefault();

  const body = {
    name: $('#name').val(),
    email: $('#new_email').val(),
    password: $('#new_password').val(),
    confirmPassword: $('#confirmPassword').val(),
    image: $('#image').val(),
    balance: $('#balance').val(),
    city: $('#city').val(),
    street: $('#street').val(),
    houseNumber: $('#houseNumber').val(),
    floor: $('#floor').val(),
    apartment: $('#apartment').val(),
  };

  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/users',
    ContentType: 'application/json',
    data: body,
    success: function (user) {
      displayLoggedUser(user.data[0].name);
    },
    error: function () {
      clearFields('name', 'new_password', 'new_email', 'confirmPassword');
      displaySignupError();
    },
  });
}

//////////////////////////////////////////////
//////////////////////////////////////////////
