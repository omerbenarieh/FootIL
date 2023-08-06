const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', loginUser);

function loginUser(event) {
  event.preventDefault();

  // Perform login validation (you can add your backend validation here)
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Sample validation (replace this with your actual validation logic)

  // Redirect to the home page after successful login
  window.location.href = '/';
}
