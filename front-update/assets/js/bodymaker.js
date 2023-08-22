console.log($('#confirmPassword').val());

function signupBody() {
  const body = {
    name: $('#name').val(),
    email: $('#email').val(),
    password: $('#password').val(),
    confirmPassword: $('#confirmPassword').val(),
    image: $('#image').val(),
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
