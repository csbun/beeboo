(function (socket, avalon) {
    'use strict';
    // 定义vm
    var ambulanceVM = avalon.define('ambulance', function (vm) {
        vm.beeboos = [];
    });
    socket.on('beeboo/create', function (beeboo) {
        console.log(beeboo);
        ambulanceVM.beeboos.unshift(beeboo);
    });

})(window.socket, window.avalon);