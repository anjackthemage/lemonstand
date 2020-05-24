/**
 *
 */

function initIndex() {

    console.log("Initializing...");
    var socket = io();

    socket.on('message', function(data){
        // do nothing for now
    })

    var player_local = new common.Player();
    player_local.name = "Test Player";

    socket.emit('player_init', player_local);
}
