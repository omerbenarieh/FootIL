const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const orderRouter = require('./routes/orderRoutes');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Root
app.get('/', (req, res) => {
  res.send('ROOT');
});

// Routers
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/products', productRouter);

module.exports = app;
