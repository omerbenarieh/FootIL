import { getAllReservations } from './handlers/getAllReservations.js';
import { getAmountReservations } from './handlers/getAmountSales.js';

$(document).ready(async function () {
    const reservations = await getAllReservations();
    const brands = await (getAmountReservations(reservations));
    let amount = brands;
    console.log(amount)
    var ctx = document.getElementById('salesChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Adidas', 'Nike'],
            datasets: [{
                label: 'Sales Amount',
                data: amount,
                backgroundColor: [
                    'rgba(128,128,0)',
                    'rgba(165,42,42)'
                ],
                borderColor: [
                    'rgba(128,128,0)',
                    'rgba(165,42,42)'
                ],
                borderWidth: 2
            }]
        },
        options: {
        }
    });
});