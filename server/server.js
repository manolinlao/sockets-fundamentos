const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app);

//SOCKET.IO no trabaja con el servidor Express pero sí con un servidor que ya tiene Node

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// Inicializamos el socket.io
// IO = esta es la comunicación del backend
module.exports.io = socketIO(server);
require('./sockets/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});