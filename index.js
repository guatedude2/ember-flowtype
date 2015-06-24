/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-flowtype',
  included: function (app) {
    app.import(app.bowerDirectory + '/flowtype/flowtype.js');
  }
};
