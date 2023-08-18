// Assuming you have the necessary setup for Socket.IO
const socket = io();

function sendMessage(message) {
  socket.emit('chat-message', message);
}

function displayMessage(message, isBot = false) {
  const messageContainer = document.getElementById('message-container');
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.classList.toggle('bot', isBot);
  messageElement.textContent = message;
  messageContainer.appendChild(messageElement);

  // Scroll to the bottom of the message container to show the latest message
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

const form = document.getElementById('chat-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.getElementById('message-input');
  const message = input.value.trim();
  if (message) {
    sendMessage(message);
    displayMessage(message);
    input.value = '';
  }
});

socket.on('chat-message', data => {
  displayMessage(data.text, data.isBot);
});
