var Api = function () {
    'use strict';
    // this.respondsWith = ['json'];

    /**
     * 颤抖吧！骚年！
     */
    this.shiver = function (req, resp, params) {
        var beeboo = geddy.model.Beeboo.create(params),
            responseText = {};

        if (!beeboo.isValid()) {
            responseText.success = false;
            responseText.msg = 'beeboo is not valid';
        }
        else {
            responseText.success = false;
            responseText.msg = 'beeboo is not valid';
            // todo 保存这个 beeboo
        }
        this.respond(responseText, {format: 'json'});
    };
};

exports.Api = Api;