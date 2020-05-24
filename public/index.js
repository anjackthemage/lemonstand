/**
 *
 */

function initIndex() {

    console.log("Initializing...");
    var socket = io();

    socket.emit('message', "Hello!");

    socket.on('message', function(data){
        // do nothing for now
    })

    var player_local = new common.Player();

}
