import { getAllUsers } from './ajax/getAllUsers.js';
import { renderUsers } from './handlers/renderUsers.js';
import { getAllReservations } from './handlers/getAllReservations.js';
import { renderAllReservations } from './handlers/renderAllReservations.js';

$(document).ready(async function () {
  const users = await getAllUsers();
  renderUsers(users);
  const reservations = await getAllReservations();
  renderAllReservations(reservations);
  // reservations.forEach((reservation, index) => {
  //   const date = reservation.dateOfReservation;
  //   const totalprice = reservation.totalPrice;
  //   if (!datelist.some(reservation => reservation.dateOfReservation == date)) {
  //     datelist.push(date.split('T')[0]);
  //   }
  // });
  const groupedByDate = reservations.reduce((result, reservation) => {
    const { date, totalPrice } = reservation;
    if (!result[date]) {
      result[date] = { date, total: 0 };
    }
    result[date].total += totalPrice;
    return result;
  }, {});
  const groupedData = Object.values(groupedByDate);
  console.log(groupedData);
});