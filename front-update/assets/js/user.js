import { getMyReservations } from './ajax/getMyReservations.js';
import { renderReservations } from './handlers/renderReservations.js';

$(document).ready(async function () {
  const reservations = await getMyReservations();
  renderReservations(reservations);
});
