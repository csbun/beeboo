var Api = function () {
    'use strict';
    // this.respondsWith = ['json'];

    /**
     * 颤抖吧！骚年！
     */
    this.shiver = function (req, resp, params) {
        var beeboo = geddy.model.Beeboo.create(params),
            responseText = {},
            self = this;

        if (!beeboo.isValid()) {
            responseText.success = false;
            responseText.msg = 'beeboo is not valid';
            this.respond(responseText, {format: 'json'});
        }
        else {
            // 保存这个 beeboo
            beeboo.save(function (err) {
                if (err) {
                    throw err;
                }
                responseText.success = true;
                responseText.msg = 'beeboo is saved';
                self.respond(responseText, {format: 'json'});
            });
        }
    };
};

exports.Api = Api;