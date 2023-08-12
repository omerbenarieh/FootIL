function fieldIsEmpty(fields) {
  const newBody = {};
  Object.keys(fields).forEach(key => {
    if (fields[key] !== '') {
      newBody[key] = fields[key];
    }
  });
  return newBody;
}

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
  return fieldIsEmpty(body);
}

function loginBody() {
  const body = {
    email: $('#email').val(),
    password: $('#password').val(),
  };
  return body;
}


function productCard() {
  const body = {
    name: $('productName').val(),
    photo: $('#image').val(),
    price: $('#price').val(),
  };
}
export { signupBody, loginBody };
