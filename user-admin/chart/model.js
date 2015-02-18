/**
 * Created by mariaturzynska on 2/17/15.
 */
var StackSelectionModel =Backbone.Model.extend({
	urlRoot:'../api/chartdata/',
	select:function(){
		this.trigger('stock:selected',this)
	},

	unselect:function(){
		console.log('stock unselected');
		this.trigger('stock:unselected',this)
	},

	toggleStatus:function(){
		if(this.get('status')==="selected"){
			this.set({"status":"unselected"});
			this.unselect();
		}else{
			this.set({"status":"selected"});
			this.select();
		}
	}
});

var StackSelectionCollection=Backbone.Collection.extend({
	initialize:function(data,options){
		this.on('stock:selected',function(model){
			console.log('stock slected',model);
		})
	},
	url:"../api/chartdata/",
	model:StackSelectionModel
});