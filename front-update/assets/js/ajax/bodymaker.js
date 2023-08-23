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

function productBody(index) {
  const company = $(`#product-company-${index}`).text().trim();
  const name = $(`#product-name-${index}`).text().trim();
  const size = parseInt($(`#product-size-${index}`).text().split(' ')[1]);
  const price = parseInt($(`#product-price-${index}`).text());
  const image = $(`#product-img-${index}`).attr('src');
  return {
    company,
    name,
    size,
    price,
    image,
  };
}

export { signupBody, loginBody, productBody };
