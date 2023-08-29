async function get10PopularProducts(reservations, products) {
    let productsMap = new Map();

    products.forEach(product => { productsMap.set(product.name, 0) })
    reservations.forEach((reservation, index) => {
        const products = reservation.products;
        products
            .forEach(product => {
                let amount = productsMap.get(product.name);
                console.log(amount);
                productsMap.set(product.name, ++amount);
            })
    });
    const sortedMap = new Map([...productsMap.entries()].sort((a, b) => b[1] - a[1]));
    const arrayMap = Array.from(sortedMap);
    console.log(arrayMap);
    let names = []
    let values = []
    arrayMap.forEach(elemant => { names.push(elemant[0]); values.push(elemant[1]) });
    names = names.slice(0, 10);
    values = values.slice(0, 10);
    return { names, values };

}

export { get10PopularProducts };