const signupBtn = document.getElementById('signup-btn');

const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');
const image = document.getElementById('image');
const address = document.getElementById('address');
const balance = document.getElementById('balance');

signupBtn.addEventListener('click', signUp);

async function signUp(event) {
  event.preventDefault();
  const body = {
    name: name.value,
    email: email.value,
    password: password.value,
    passwordConfirm: confirm_password.value,
  };
  await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  window.location.href = '/';
}
