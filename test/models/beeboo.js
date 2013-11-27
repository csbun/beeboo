var assert = require('assert')
  , tests
  , Beeboo = geddy.model.Beeboo;

tests = {

  'after': function (next) {
    // cleanup DB
    Beeboo.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var beeboo = Beeboo.create({});
    beeboo.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
