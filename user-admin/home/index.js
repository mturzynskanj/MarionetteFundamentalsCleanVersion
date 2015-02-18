var HomeModule = function(settings) {
  var module = {};
  module.app = settings.app || {};

  //controller
  module.controller = new HomeController({ module: module });

  //router
  module.router = new HomeRouter();

  return module;

};