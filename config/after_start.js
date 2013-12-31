// 自己写 socket (前端用app2.js)
geddy.beeboo = {};

geddy.io.sockets.on('connection', function (socket) {
    'use strict';

    socket.emit('hello', {message: 'world'});
    socket.on('message', function(message) {
        geddy.log.notice(message);
    });
    geddy.beeboo.socket = socket;
});
// end