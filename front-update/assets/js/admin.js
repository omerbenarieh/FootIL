import { getAllUsers } from './ajax/getAllUsers.js';
import { renderUsers } from './handlers/renderUsers.js';

$(document).ready(async function () {
  const users = await getAllUsers();
  renderUsers(users);
});
