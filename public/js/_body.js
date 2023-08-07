function signupBody() {
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
  return body;
}

function loginBody() {
  const body = {
    email: $('#email').val(),
    password: $('#password').val(),
  };
  return body;
}

export { signupBody, loginBody };
