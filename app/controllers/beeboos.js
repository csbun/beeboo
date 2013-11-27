var Beeboos = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.Beeboo.all(function(err, beeboos) {
      if (err) {
        throw err;
      }
      self.respondWith(beeboos, {type:'Beeboo'});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , beeboo = geddy.model.Beeboo.create(params);

    if (!beeboo.isValid()) {
      this.respondWith(beeboo);
    }
    else {
      beeboo.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(beeboo, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.Beeboo.first(params.id, function(err, beeboo) {
      if (err) {
        throw err;
      }
      if (!beeboo) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(beeboo);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.Beeboo.first(params.id, function(err, beeboo) {
      if (err) {
        throw err;
      }
      if (!beeboo) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(beeboo);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.Beeboo.first(params.id, function(err, beeboo) {
      if (err) {
        throw err;
      }
      beeboo.updateProperties(params);

      if (!beeboo.isValid()) {
        self.respondWith(beeboo);
      }
      else {
        beeboo.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(beeboo, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.Beeboo.first(params.id, function(err, beeboo) {
      if (err) {
        throw err;
      }
      if (!beeboo) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.Beeboo.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(beeboo);
        });
      }
    });
  };

};

exports.Beeboos = Beeboos;
