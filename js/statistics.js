function fetchDataAndUpdateGraph() {
    $.ajax({
        url: "http://localhost:3000/api",
        method: "GET",
        success: function (data) {
            // Assuming 'myChart' is your chart instance
            myChart.data.labels = Object.keys(data);
            myChart.data.datasets[0].data = Object.values(data);
            myChart.update();
        },
        error: function (error) {
            console.error("Error fetching data", error);
        }
    });
}

// Fetch data every 5 seconds
setInterval(fetchDataAndUpdateGraph, 5000);