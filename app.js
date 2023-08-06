const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');

const app = express();

// Using Cors (For XSS problem)
app.use(cors());

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Set the ejs View Engine
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);
app.use(express.static(path.join(__dirname, 'public')));

// Root
app.get('/', (req, res) => {
  res.render('index');
});

// Routers
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

module.exports = app;
