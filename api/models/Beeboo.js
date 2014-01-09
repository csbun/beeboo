/**
 * Beeboo
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
var levels = [
  'info',
  'warning',
  'success',
  'error'
];

module.exports = {

  attributes: {
    msg: {
      type: 'string',
      required: true
    },
    level: {
      type: 'string',
      defaultsTo: levels[0]
    }
  },

  // 校验 level
  beforeCreate: function(values, next) {
    if (levels.indexOf(values.level) < 0) {
      values.level = levels[0];
    }
    next();
  }
};
