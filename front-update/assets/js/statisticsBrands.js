import { getAllReservations } from './handlers/getAllReservations.js';
import { getAmountReservations } from './handlers/getAmountSales.js';
import { getAllProducts } from './ajax/getAllProducts.js';
import { get10PopularProducts } from './handlers/getPopularProduct.js';

$(document).ready(async function () {
    const reservations = await (getAllReservations());
    const brands = await (getAmountReservations(reservations));
    let amount = brands;
    console.log(amount)


    // brands chart
    var ctx = document.getElementById('salesChart').getContext('2d');
    var chartSales = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Adidas', 'Nike'],
            datasets: [{
                label: 'Sales Amount',
                data: amount,
                backgroundColor: [
                    'rgba(128,128,0)',
                    'rgba(47,79,79)'
                ],
                borderColor: [
                    'rgba(128,128,0)',
                    'rgba(47,79,79)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            title: {
                display: true,
                text: "Orders by brands"
            }
        }
    });

    // Chart for Most Ordered Product
    const res = await getAllProducts();
    const products = res.data.products;
    console.log(products);
    var productsChart = document.getElementById('productChart').getContext('2d');

    var productData = await (get10PopularProducts(reservations, products));
    const dataChart = [productData.names, productData.values];

    var chartProducts = new Chart(productsChart, {
        type: "bar",
        data: {
            labels: dataChart[0],
            datasets: [{
                label: "Number of Orders",
                backgroundColor: "rgb(46, 204, 113)",
                data: dataChart[1]
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: { beginAtZero: true }
                }]
            },
            title: {
                display: true,
                text: "Most Ordered Products"
            }
        }
    });


    document.getElementById('productChart').onclick = function (evt) {
        var activePoints = myChart.getElementsAtEvent(evt);
        const names = productData.names;
        if (activePoints.length > 0) {
            // Get the first clicked element
            var firstPoint = activePoints[0];

            // Retrieve information about the clicked point
            var label = myChart.data.labels[firstPoint._index];
            var value = myChart.data.datasets[firstPoint._datasetIndex].data[firstPoint._index];

            // Redirect based on the clicked data. You can customize this logic.
            if (label === names[0]) {

                window.location.href = "https://example.com/red";
            } else if (label === "Blue") {
                window.location.href = "https://example.com/blue";
            }
            // ... and so on for other labels ...
        }
    };
});



