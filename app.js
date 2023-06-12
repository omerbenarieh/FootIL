const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const orderRouter = require('./routes/orderRoutes');

app.use(bodyParser.json());

// Root
app.get('/', (req, res) => {
  res.send('ROOT');
});

// Routers
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/products', productRouter);

module.exports = app;
