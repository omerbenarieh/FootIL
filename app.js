const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

// Routers
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const reservationRouter = require('./routes/reservationRoutes');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

// Using Cors (For XSS problem)
app.use(cors());

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Root
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/front-update/home.html');
});

app.use(express.static(path.join(__dirname, 'front-update')));
// Routers
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/reservations', reservationRouter);

// Handling Undefined Routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this erver!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
