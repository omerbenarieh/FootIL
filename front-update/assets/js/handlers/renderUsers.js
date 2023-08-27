import { deleteUser } from '../ajax/deleteUser.js';

function renderUsers(users) {
  const container = document.getElementById('container');
  container.innerHTML = '';

  users.forEach(user => {
    const id = user._id;
    const card = `
    <tr>
      <td id="user-id-${id}" class="text-lowercase">${id}</td>
      <td id="user-name-${user.name}" class="text-lowercase">${user.name}</td>
      <td class="text-lowercase">${user.email}</td>
      <td class="text-lowercase">${user.role}</td>
      <td>
        <button type="button" class="btn btn-danger delete-btn btn-md" data-id="${id}">
          <i
            class="far fa-trash-alt d-xl-flex justify-content-xl-center align-items-xl-center"
          ></i>
        </button>
      </td>
    </tr>`;
    container.innerHTML += card;
  });
  const deleteBtns = document.querySelectorAll('.delete-btn');
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', attachAndDelete);
  });

  async function attachAndDelete(e) {
    const button = e.target;
    const userId = button.getAttribute('data-id');
    const row = button.closest('tr');
    await deleteUser(userId);
    row.remove();
  }
}

export { renderUsers };
