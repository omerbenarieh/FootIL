const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

// Enable config.env file
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

// Connecting to DB
mongoose
  .connect(DB)
  .then(con => console.log('DB connection was successful! :)'));

// Start Server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
