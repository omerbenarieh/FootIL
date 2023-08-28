
async function getAmountReservations(reservations) {
    let nike = 0
    let adidas = 0;
    reservations.forEach((reservation, index) => {
        const products = reservation.products;
        products
            .forEach(product => {
                if (product.company === 'adidas') {
                    adidas++
                } else {
                    nike++
                };
            })
    })
    var amount = [adidas, nike, 0];
    console.log(amount);
    return amount;
}

export { getAmountReservations };