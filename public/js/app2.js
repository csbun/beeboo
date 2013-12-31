(function (io) {
    'use strict';
    // 定义vm
    var ambulanceVM = avalon.define('ambulance', function (vm) {
        vm.beeboos = [];
    });

    // socket
    var socket = io.connect(location.origin);
    socket.on('hello', function (data) {
        // console.log(data);
        socket.emit(
            'message',
            'hello from the browser, got your data: ' + JSON.stringify(data));
    });
    socket.on('api:shiver', function (beeboo) {
        ambulanceVM.beeboos.unshift(beeboo);
    });

})(window.io);