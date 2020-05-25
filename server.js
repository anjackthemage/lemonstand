/**
 * 
 */

var common = require('./public/shared/player.js');
var Client = require('./client.js');// Should modularize these

const express = require('express');
var app = express();
app.use(express.static('./public'));

var http = require('http').createServer(app);
var io = require('socket.io')(http);

var listen_port = 18080;

var clients = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
    console.log('Incoming connection...');
    clients.push(new Client(socket));
    
});

http.listen(listen_port, () => {
    console.log('Server listening on *:' + listen_port);
});