var UserRouter = Backbone.Router.extend({
  initialize : function(options){
    this.module = options.module;
  },
  routes: {
    "users": "showUserList",
    "users/:id": "showUserDetail",
    "users/:id/edit": "showUserEditor",
    "users/:id/roles" : "showUserRoles"
  },
  showUserList: function() {
    this.module.app.trigger("user:listing:requested");
  },
  showUserDetail: function(id) {
    this.fetchAndThen(id, function(user) {
      user.select();
    });
  },
  showUserEditor: function(id) {
    this.fetchAndThen(id, function(user) {
      user.edit();
    });
  },
  showUserRoles: function(id){
    this.fetchAndThen(id, function(user) {
      user.editRoles();
    });
  },
  fetchAndThen: function(id, next) {
    var self = this;
    this.module.collection.fetch().then(function() {
      var user = self.module.collection.get(id);
      next(user);
    });
  }
});