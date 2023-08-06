const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const viewsRouter = require('./routes/viewsRoutes');

const app = express();

// Using Cors (For XSS problem)
app.use(cors());

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Set the ejs View Engine
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);
app.use(express.static(path.join(__dirname, 'public/js')));

// Root
app.use('/', viewsRouter);

// Routers
app.use('/users', userRouter);
app.use('/products', productRouter);

module.exports = app;
