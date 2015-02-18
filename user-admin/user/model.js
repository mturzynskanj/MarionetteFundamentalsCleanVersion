var User = Backbone.Model.extend({
  urlRoot: "../api/users/",
  validate: function(atts, opts) {
    if (!(atts.email && atts.userName)) {
      return "Need an email AND a userName";
    }
  },
  initialize: function(options) {
    this.on("invalid", function(m) {
      alert(m.validationError);
    });
  },
  select: function() {
    this.trigger("user:selected", this);
  },
  edit: function() {
    this.trigger("user:editing", this);
  },
  editRoles: function(){
    this.trigger("user:editRoles", this);
  },
  parse : function(m){
    m.fullName = m.first + " " + m.last;
    m.gravatar = function(size) {
      return "http://www.gravatar.com/avatar/" + hex_md5(m.email)+"?s="+size;
    }
    return m;
  }

});
var UsersCollection = Backbone.Collection.extend({
  initialize : function(data, options){
    this.module = options.module;
    this.on("user:selected", function(model) {
      this.module.app.trigger("user:selected", model);
    });
    this.on("user:editing", function(model) {
      this.module.app.trigger("user:editing", model);
    });
    this.on("user:editRoles", function(model) {
      this.module.app.trigger("user:editRoles", model);
    });
  },
  url: "../api/users/",
  model: User
});
