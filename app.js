require('dotenv').config(); // Viene de .dotenv

const Server = require('./models/server');

const server = new Server();

server.listen();