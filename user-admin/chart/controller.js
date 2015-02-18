/**
 * Created by mariaturzynska on 2/17/15.
 */
var ChartController=Marionette.Controller.extend({
	initialize:function(options){
		this.module=options.module;
	},

	showChartIndex:function(){
		console.log('inside chart contoller');
		var chartLayout=new ChartLayoutView();
		this.module.app.mainRegion.show(chartLayout);

		chartLayout.leftSelection.show(new ChartListSelectionView({collection:this.module.collection}));
		chartLayout.topSelection.show(new ChartTopListSelectionView());
		this.module.collection.fetch();


		this.module.router.navigate('charts');
	}
});