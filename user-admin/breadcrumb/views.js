var BreadCrumbView = Marionette.ItemView.extend({
  tagName: "li",
  template: _.template("<a href=#><%=title%></a>"),
  events: {
    "click a": "fireTrigger"
  },
  fireTrigger: function(ev) {
    ev.preventDefault();
    this.model.select();
  }
});
var BreadCrumbList = Marionette.CollectionView.extend({
  tagName: "ol",
  className: "breadcrumb",
  childView: BreadCrumbView
});