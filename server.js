// Modules
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { createServer } = require('http');
const { Server } = require('socket.io');

// App + Server
const app = require('./app');
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ['http://127.0.0.1:5500'],
  },
});

// Enable config.env file
dotenv.config({ path: './config.env' });

// Connecting to DB
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'FootIL',
  })
  .then(() => console.log('DB connection was successful! 😁'));

io.on('connection', socket => {
  console.log(`A User connected with Socket ID of: ${socket.id}`);
});
// Start Server
const port = process.env.PORT;
httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
