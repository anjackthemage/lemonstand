/**
 * 
 */

var common = require('./public/shared/player.js');

/**
 * @class   Handles communication with a connected player.
 */
class Client {// Should modularize this
    player = null;

    constructor(socket) {
        this.socket = socket;
        this.id = socket.id;
        this.player;

        console.log('New client: ' + this.id);

        socket.on('disconnect', () => {
            console.log('Connection closed to: ' + this.id);
        });
    
        socket.on('message', (data) => {
            console.log('Message from client: ' + this.id);
            console.log(data);
        });

        socket.on('player_init', (player_data) => {
            this.player = player_data;
            console.log(this.player);
        })
    }
}

module.exports = Client;