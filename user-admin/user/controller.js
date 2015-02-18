var UserController = Marionette.Controller.extend({
  initialize : function(options){
    this.module = options.module;
  },
  showUserList: function() {
    var userListView = new UserListView({ collection: this.module.collection });
    this.module.app.mainRegion.show(userListView);
    this.module.router.navigate("users");
    this.module.collection.fetch();
  },
  showUserDetail: function(user) {
    var layout = new UserLayoutView({ model: user });
    this.module.app.mainRegion.show(layout);

    layout.summary.show(new UserSummaryView({ model: user }));
    layout.detail.show(new UserDetailView({ model: user }));

    this.module.router.navigate("users/" + user.id);
  },
  showUserEditor: function(user) {
    var layout = new UserLayoutView({ model: user });
    this.module.app.mainRegion.show(layout);

    layout.summary.show(new UserSummaryView({ model: user }));
    layout.detail.show(new UserEditorView({ model: user }));

    this.module.router.navigate("users/" + user.id+"/edit");
  },
  showUserRoles: function(user) {
    console.log(user)
    var layout = new UserLayoutView({ model: user });
    this.module.app.mainRegion.show(layout);

    layout.summary.show(new UserSummaryView({ model: user }));
    layout.detail.show(new UserRolesView({ model: user }));
    this.module.router.navigate("users/" + user.id + "/roles");
  }
});