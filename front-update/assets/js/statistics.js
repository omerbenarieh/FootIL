// Chart for Profits
var xValues = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const yValues = [3200, 7500, 12000, 27800, 42515, 29015, 45420, 39241, 21421, 43502, 26642, 29432];

new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            fill: false,
            lineTension: 0,
            color: "black",
            backgroundColor: "black",
            borderColor: "rgb(46, 204, 113)",
            data: yValues
        }]
    },
    options: {
        legend: { display: false },
        scales: {
            yAxes: [{ ticks: { min: 0, max: 50000 } }],
        },
        title: {
            display: true,
            text: "Profits in dollar in `YEAR`"
        }
    }
});

// Chart for Most Ordered Product
const productData = {
    labels: ["Adidas Yeezy 500", "Nike Dunk SB low ", "Adidas Yeezy Slide", "Nike jordan 1 high", "Nike Dunk SB low", "Nike Dunk SB low ", "Adidas Yeezy 500", "Nike jordan 1 high", "Adidas Yeezy 500", "Nike jordan 1 mid"],
    values: [5, 7, 2, 10, 13, 6, 3, 8, 5, 11]
};

new Chart("productChart", {
    type: "bar",
    data: {
        labels: productData.labels,
        datasets: [{
            label: "Number of Orders",
            backgroundColor: "rgb(46, 204, 113)",
            data: productData.values
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
            text: "Most Ordered Products (Last 10 days)"
        }
    }
});