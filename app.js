const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const reservationRouter = require('./routes/reservationRoutes');

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
app.use('/orders', reservationRouter);
app.use('/products', productRouter);

// Routes Errors.
app.use('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global Error handling
app.use(globalErrorHandler);

module.exports = app;
