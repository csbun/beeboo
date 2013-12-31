var Beeboo = function () {
    'use strict';

    var levels = [
            'info',
            'warning',
            'success',
            'error'
        ];

    // 定义属性
    this.defineProperties({
        level: {
            type: 'string'
        },
        msg: {
            type: 'string',
            required: true
        }
    });

    // 参数校验
    this.validatesPresent('msg');
    this.validatesWithFunction('level', function (l) {
        return levels.indexOf(l) >= 0;
    });
};

Beeboo = geddy.model.register('Beeboo', Beeboo);
