// let genreCountList = [];
// let lastTenDaysCountSales = [];
// async function fetchSalesPerGenre() {
//     await $.ajax({
//         url: `http://localhost:6969/statistics/salesPerGenre`,
//         type: "GET",
//         contentType: "application/json",
//         secure: true,
//         cors: true,
//         headers: {
//             "Access-Control-Allow-Origin": "*",
//         },
//         success: function (res) {
//             genreCountList = res;
//         },
//         error: function (error) {
//             alert("error fetching Genere Count List");
//         }
//     })
// }

// async function fetchLastTenDaysSales() {
//     await $.ajax({
//         url: `http://localhost:300/statistics/lastTenDaysSales`,
//         type: "GET",
//         contentType: "application/json",
//         secure: true,
//         cors: true,
//         headers: {
//             "Access-Control-Allow-Origin": "*",
//         },
//         success: function (res) {
//             lastTenDaysCountSales = res;
//         },
//         error: function (error) {
//             alert("error fetching Last Ten Days Sales Count List");
//         }
//     })
// }


// async function lastTenDaysSalesStatistics() {
//     await fetchLastTenDaysSales();
//     let lastTenDays = new Map();
//     // add the last 10 days in format dd-mm-yyyy
//     for (let i = 0; i < 10; i++) {
//         let date = new Date();
//         date.setDate(date.getDate() - i);
//         lastTenDays.set(`${date.getDate()}-${(date.getMonth() + 1 > 9) ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1)}-${date.getFullYear()}`, 0);
//     }
//     lastTenDaysCountSales.forEach(date => {
//         lastTenDays.set(date._id, date.count)
//     });
//     const xValues = [];
//     const yValues = [];
//     lastTenDays.forEach((value, key) => {
//         xValues.push(key);
//         yValues.push(value);
//     });
//     xValues.reverse();
//     yValues.reverse();

//     console.log(lastTenDays);
//     let max = yValues[0];
//     for (let i = 1; i < yValues.length; i++) {
//         if (max < yValues[i])
//             max = yValues[i];
//     }

//     const barColors = [
//         '#FF5733', '#FFBD33', '#FFD633', '#FFEE33', '#D9FF33',
//         '#7DFF33', '#33FF7E', '#33FFB9', '#33FFE5', '#33E5FF',
//         '#33B9FF', '#337EFF', '#334CFF', '#7A33FF', '#B933FF',
//         '#E533FF', '#FF33F1', '#FF33B9', '#FF3398', '#FF336A',
//         '#FF334C', '#FF5D33', '#FF8333', '#FFA833', '#FFD133'
//     ];
//     const graph = document.getElementById("genresChart2")
//     new Chart(graph, {
//         type: "line",
//         data: {
//             labels: xValues,
//             datasets: [{
//                 fill: false,
//                 lineTension: 0,
//                 color: "black",
//                 backgroundColor: "black",
//                 borderColor: "rgb(46, 204, 113)",
//                 data: yValues
//             }]
//         },
//         options: {
//             legend: { display: false },
//             scales: {
//                 yAxes: [{ ticks: { min: 0, max: max } }],
//             },
//             title: {
//                 display: true,

//             }
//         }
//     });
// }

// async function salesStatisticPerGenre() {
//     await fetchSalesPerGenre();
//     const xValues = [];
//     const yValues = [];
//     genreCountList = genreCountList.sort((a, b) => a._id.localeCompare(b._id));
//     genreCountList.forEach(genre => {
//         xValues.push(genre._id);
//         yValues.push(genre.count);
//     });
//     yValues.push(0);

//     const barColors = [
//         '#FF5733', '#FFBD33', '#FFD633', '#FFEE33', '#D9FF33',
//         '#7DFF33', '#33FF7E', '#33FFB9', '#33FFE5', '#33E5FF',
//         '#33B9FF', '#337EFF', '#334CFF', '#7A33FF', '#B933FF',
//         '#E533FF', '#FF33F1', '#FF33B9', '#FF3398', '#FF336A',
//         '#FF334C', '#FF5D33', '#FF8333', '#FFA833', '#FFD133'
//     ];

//     new Chart("genresChart", {
//         type: "bar",
//         data: {
//             labels: xValues,
//             datasets: [{
//                 backgroundColor: barColors,
//                 data: yValues
//             }],

//         },
//         options: {
//             legend: {
//                 labels: {
//                     fontColor: 'white'
//                 },
//                 display: false
//             }
//         }
//     });
// }

import { getAllReservations } from './handlers/getAllReservations.js';

async function firstgraph() {
    const reservations = await getAllReservations().data;

    // Extract product data from reservations
    const productData = {};
    const productNames = Array.from(
        new Set(reservations.flatMap((r) => r.products.map((p) => p.name)))
    );

    reservations.forEach((reservation) => {
        reservation.products.forEach((product) => {
            const productName = product.name;
            if (!productData[productName]) {
                productData[productName] = Array(reservations.length).fill(0);
            }
            const reservationIndex = reservations.findIndex(
                (r) => r.date === reservation.date
            );
            productData[productName][reservationIndex] += product.quantity;
        });
    });

    // Create a bar chart using D3.js
    const width = 800;
    const height = 400;
    const svg = d3
        .select("#chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    const xScale = d3.scaleBand().domain(reservations.map((r) => r.date)).range([0, width]).padding(0.1);
    const yScale = d3.scaleLinear().domain([0, d3.max(Object.values(productData).flat())]).nice().range([height, 0]);

    svg
        .selectAll("g")
        .data(productNames)
        .enter()
        .append("g")
        .attr("transform", (d) => `translate(0,0)`)
        .selectAll("rect")
        .data((product) => productData[product])
        .enter()
        .append("rect")
        .attr("x", (d, i) => xScale(reservations[i].date))
        .attr("y", (d) => yScale(d))
        .attr("width", xScale.bandwidth())
        .attr("height", (d) => height - yScale(d))
        .attr("fill", (_, i) => d3.schemeCategory10[i % 10]);

    // Add axes
    svg.append("g").attr("transform", `translate(0, ${height})`).call(d3.axisBottom(xScale).tickFormat(d3.timeFormat("%Y-%m-%d")));
    svg.append("g").call(d3.axisLeft(yScale));

    // Add X-axis label
    svg
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height + 40})`)
        .append("text")
        .style("text-anchor", "middle")
        .text("Date");

    // Add Y-axis label
    svg
        .append("g")
        .attr("transform", `translate(-50, ${height / 2}) rotate(-90)`)
        .append("text")
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Amount of Product Bought");

    // Add legend
    const legend = svg
        .selectAll(".legend")
        .data(productNames)
        .enter()
        .append("g")
        .attr("class", "legend")
        .attr("transform", (_, i) => `translate(0,${i * 20})`);

    legend
        .append("rect")
        .attr("x", width - 18)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", (_, i) => d3.schemeCategory10[i % 10]);

    legend
        .append("text")
        .attr("x", width - 24)
        .attr("y", 9)
        .attr("dy", ".35em")
        .style("text-anchor", "end")
        .text((d) => d);
}