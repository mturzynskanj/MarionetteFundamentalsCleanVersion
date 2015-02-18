var UserLayoutView = Marionette.LayoutView.extend({
  template: "#user-layout-template",
  regions: {
    summary: "#summary",
    detail: "#detail"
  }
});

var UserSummaryView = Marionette.ItemView.extend({
  template: "#summary-template"
});

var UserDetailView = Marionette.ItemView.extend({
  template: "#detail-template",
  events: {
    "click #nav-user-edit": "showUserEditor",
    "click #nav-user-roles": "showUserRoles"
  },
  showUserEditor: function(ev) {
    ev.preventDefault();
    this.model.edit();
  },
  showUserRoles: function(ev) {
    ev.preventDefault();
    this.model.editRoles();
  }
});
var UserItemView = Marionette.ItemView.extend({
  tagName: "tr",
  template: _.template("<td><a href=#><%=email%></a></td>"),
  events: {
    "click a": "showUserDetail"
  },
  showUserDetail: function(ev) {
    ev.preventDefault();
    this.model.select();
  }
});
var UserListView = Marionette.CollectionView.extend({
  tagName: "table",
  className: "table table-striped",
  childView: UserItemView,
  onBeforeRender: function() {
    this.$el.append("<h2>User List</h2>");
  }
});

var UserEditorView = Marionette.ItemView.extend({
  template: "#user-editor-template",
  events: {
    "submit" : "saveEdits"
  },
  saveEdits: function(ev) {
    ev.preventDefault();
    var model = this.model;

    this.$el.find('input[name]').each(function() {
      model.set(this.name, this.value);
    });
    
    model.save(model.attributes, {
      success: function(model, response, opts) {
        alert("User saved!");
      },
      error: function(model, response, opts) {
        alert(response);
      }
    });
  }
});
var UserRolesView = Marionette.ItemView.extend({
  template : "#user-roles-template"
});
