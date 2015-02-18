/**
 * Created by mariaturzynska on 2/17/15.
 */
var ChartRouter=Backbone.Router.extend({
	initialize:function(options){
		this.module=options.module;
	},
	routes:{
		"charts": "showStocksIndex",
		"stocks/:id":"showStockDetails"

	},

	showStocksIndex:function(){
		this.module.app.trigger("stock:index:requested");

	},

	showStockDetails:function(id){
		this.fetchAndThen(id,function(stock){
			stock.select();
		});
	},

	fetchAndThen:function(id,next){
		var self=this;
		this.module.collection.fetch().then(function(){
			var stock=self.module.collection.get(id);
			next(stock);
		});
	}



});