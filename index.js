var toRegExp = require('path-to-regexp');

module.exports = function pathToRegExpLoader(source) {
  this.cacheable();

  var i;
  var routes = JSON.parse(source);
  var length = routes.length;

  for (i = 0; i < length; i++) {
    var route = routes[i];
    route.keys = [];
    route.pettern = toRegExp(route.path, route.keys);
  }

  return routes;
};
