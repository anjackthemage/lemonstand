/**
 * 
 */

(function(exports){

class Player {
    constructor() {
        console.log("New player created!");
    }
}

exports.Player = Player;

})(typeof exports === 'undefined' ? this['common']={} : exports);