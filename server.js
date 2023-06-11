const mongoose = require('mongoose');
const dotenv = require('dotenv');

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
const app = require('./app');
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
