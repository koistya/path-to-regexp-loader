/**
 * path-to-regexp-loader for Webpack
 *
 * Copyright © 2016-present Konstantin Tarkus <hello@tarkus.me>
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var toRegExp = require('path-to-regexp');

module.exports = function pathToRegExpLoader(source) {
  this.cacheable && this.cacheable();

  var i;
  var routes = typeof source === 'string' ? JSON.parse(source) : source;
  var length = routes.length;

  for (i = 0; i < length; i++) {
    var route = routes[i];
    route.keys = [];
    route.pettern = toRegExp(route.path, route.keys);
  }

  this.value = routes;

  return 'module.exports = ' + JSON.stringify(routes, undefined, '  ') + ';';
};
