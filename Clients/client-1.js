const btn = document.getElementById('btn');
const input = document.getElementById('input');
const roomInput = document.getElementById('roomInput');
const roomBtn = document.getElementById('roomBtn');

const socket = io('http://localhost:3000');
socket.on('connect', () => {
  console.log(`You connected with id: ${socket.id}`);
});

btn.addEventListener('click', e => {
  e.preventDefault();
  const msg = input.value;
  const roomMsg = roomInput.value;
  socket.emit('send-msg', msg, roomMsg);

  input.value = '';
  roomInput.value = '';
});

socket.on('receive-msg', message => {
  console.log(message);
});
