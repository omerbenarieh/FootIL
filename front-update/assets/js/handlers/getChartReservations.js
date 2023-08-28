
async function getChartReservations(reservations) {
    const container = document.getElementById('reservations');
    reservations.forEach((reservation, index) => {
        const products = reservation.products;
        const productRows = products
            .map(product => {
                return `<div>${product.company}</div>`;
            })
            .join('');
        const row = `
    <tr>
      <td>${index + 1}</td>
      <td class="w-50"><div>Number of Products: ${products.length
            }</div>${productRows}</td>
    </tr>
    `;
        container.innerHTML += row;
        console.log(row);
    });
}

export { getChartReservations };
