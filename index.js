/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-hopscotch',
  included: function (app) {
    app.import(app.bowerDirectory + '/hopscotch/dist/css/hopscotch.css');
    app.import(app.bowerDirectory + '/hopscotch/dist/js/hopscotch.js');
  }
};
