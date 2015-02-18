//App Objects
var UserAdmin = new Marionette.Application();
  console.info('useradmint',UserAdmin);
UserAdmin.addRegions({
  mainRegion: "#app",
  navRegion: "#breadcrumbs"
});

//Module Loader
UserAdmin.addInitializer(function() {
  UserAdmin.breadCrumbs = new BreadCrumbModule({
    app: UserAdmin,
    region: UserAdmin.navRegion,
    initialData: { title: "Home" }
  });

  UserAdmin.user = new UserModule({ app: UserAdmin });
  UserAdmin.home = new HomeModule({ app: UserAdmin });
  UserAdmin.chart= new ChartModule({app:UserAdmin});

  console.log('UserAdmin.chart--------',UserAdmin.chart);

});

//Breadcrumb Events
UserAdmin.addInitializer(function() {
  var crumbs = {
    home: { title: "Home", trigger: "index:requested" },
    list: { title: "User Listing", trigger: "user:listing:requested" }
  }
  //load it up
  UserAdmin.breadCrumbs.show();

  UserAdmin.on("user:selected", function(selectedUser) {
    UserAdmin.breadCrumbs.setCrumbs([crumbs.home, crumbs.list, { title: selectedUser.get("email") }]);
  });
  UserAdmin.on("user:editing", function(selectedUser) {
    UserAdmin.breadCrumbs.setCrumbs([crumbs.home, crumbs.list, { title: "Editing " + selectedUser.get("email") }]);
  });
  UserAdmin.on("user:listing:requested", function() {
    UserAdmin.breadCrumbs.setCrumbs([crumbs.home, crumbs.list]);
  });

  UserAdmin.on("index:requested", function() {
    UserAdmin.breadCrumbs.setCrumbs(crumbs.home);
  });
});

//User Events
UserAdmin.addInitializer(function() {

  UserAdmin.on("user:selected", function(u) {
    UserAdmin.user.controller.showUserDetail(u);
  });

  UserAdmin.on("user:editing", function(u) {
    UserAdmin.user.controller.showUserEditor(u);
  });

  UserAdmin.on("user:listing:requested", function() {
    UserAdmin.user.controller.showUserList();
  });

  UserAdmin.on("user:editRoles", function(u) {
    UserAdmin.user.controller.showUserRoles(u);
  });
});

//Chart Events

UserAdmin.addInitializer(function(){
  UserAdmin.on('stock:selected',function(s){
    UserAdmin.chart.controller.showStock(s);
  });

  UserAdmin.on("stock:index:requested",function(){
    console.log('inside stock:index:requested');
    UserAdmin.chart.controller.showChartIndex();
  })


});

//Home Events
UserAdmin.addInitializer(function() {
  UserAdmin.on("index:requested", function() {
    UserAdmin.home.controller.showIndex();
  });

  Backbone.history.start();
});