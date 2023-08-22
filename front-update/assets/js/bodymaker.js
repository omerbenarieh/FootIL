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

function productBody() {
  const body = {
    name: $('#product-name').val(),
    price: $('#product-price').val(),
    image: $('#product-img').val(),
  };
  return body();
}

export { signupBody, loginBody, productBody };
