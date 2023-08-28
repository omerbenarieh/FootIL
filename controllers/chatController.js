const sanitizedMessage = require('xss');

const handleChat = (io) => {

    io.on('connection', (socket) => {
        console.log('New connection');

        const welcomeMessage = 'Welcome to FootIL! How can we assist you today?';
        socket.emit('message', welcomeMessage);

        socket.on('message', (data) => {
            console.log('Received message:', data);

            const sanitizedData = sanitizedMessage.escapeHtml(data);

            const botResponse = handleBotResponse(sanitizedData);
            socket.emit('message', botResponse);
        });

        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    });
}


module.exports = {handleChat};
