import { getAllUsers } from './ajax/getAllUsers.js';
import { renderUsers } from './handlers/renderUsers.js';
import { getAllReservations } from './handlers/getAllReservations.js';
import { renderAllReservations } from './handlers/renderAllReservations.js';

$(document).ready(async function () {
  const users = await getAllUsers();
  renderUsers(users);
  const reservations = await getAllReservations();
  renderAllReservations(reservations);
});
