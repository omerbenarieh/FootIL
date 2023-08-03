const button = document.getElementById('button');
const name = document.getElementById('name');
button.addEventListener('click', test);
async function test(e) {
  e.preventDefault();
  const res = await fetch(
    'http://127.0.0.1:3000/users/648647d34d6ed8fdae7c07bc',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const user = await res.json();
  name.innerHTML = user.data.name;
}
