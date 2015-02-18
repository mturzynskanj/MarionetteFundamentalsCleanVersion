var BreadCrumbModule = function(settings) {

  var initialData = settings.intialData || [];
  var module = {};
  var collection = new BreadCrumbCollection(initialData);
  var region = settings.region;
  var view = new BreadCrumbList({ collection: collection });

  module.app = settings.app || {};
  module.setCrumbs = function(data) {
    collection.reset(data);
  };


  //events
  collection.on("breadcrumb:selected", function(crumb) {
    module.app.trigger(crumb.get("trigger"));
  });

  //explicit call to load
  module.show = function() {
    if (region) {
      region.show(view);
    } else {
      throw "Can't show the breadcrumbs without a region specified";
    }
  }

  return module;
};