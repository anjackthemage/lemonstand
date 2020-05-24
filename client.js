/**
 * 
 */

var common = require('./public/common.js');

class Client {// Should modularize this
    player = null;

    constructor(socket) {
        this.socket = socket;
        this.id = socket.id;

        console.log('New client: ' + this.id);

        this.player = new common.Player();

        socket.on('disconnect', () => {
            console.log('Connection closed to: ' + this.id);
        });
    
        socket.on('message', (data) => {
            console.log('Message from client: ' + this.id);
            console.log(data);
        });
    }
}

module.exports = Client;