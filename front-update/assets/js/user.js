import { getMyReservations } from './ajax/getMyReservations.js';
import { renderReservations } from './handlers/renderReservations.js';
import { updateSettings } from './handlers/updateSettings.js';

$(document).ready(async function () {
  const reservations = await getMyReservations();
  renderReservations(reservations);
  $('#updateButton').click(async e => {
    e.preventDefault();
    await updateSettings();
  });
});
