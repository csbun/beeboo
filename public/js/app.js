(function () {
    'use strict';
    // 定义vm
    var ambulanceVM = avalon.define('ambulance', function (vm) {
        vm.beeboos = [];
    });


    // 加载数据
    // geddy.model.Beeboo.all({}, function (bbs) {
    //     vm.beeboos.push.apply(vm.beeboos, bbs);
    // });

    // geddy自带socket
    geddy.io.addListenersForModels(['Beeboo']);
    geddy.model.Beeboo.on('save', function (beeboo) {
        ambulanceVM.beeboos.unshift(beeboo);
    });
    // geddy.model.Beeboo.on('update', function (item) {
    //     console.log(item);
    // });
    // geddy.model.Beeboo.on('remove', function (id) {
    //     console.log('remove');
    //     console.log(id);
    // });
})();