// Modules
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { createServer } = require('http');
const { Server } = require('socket.io');

// App + Server
const app = require('./app');
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: '*',
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

// Some Tests for Socket comunicating with clients.
io.on('connection', socket => {
  console.log(`Client connected with id: ${socket.id}`);
  socket.on('send-msg', (message, room) => {
    if (room === '') {
      socket.broadcast.emit('receive-msg', message + ` ${socket.id}`);
    } else {
      socket.to(room).emit('receive-msg', message + ` from ${socket.id}`);
    }
  });
});

// Start Server
const port = process.env.PORT;
httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
