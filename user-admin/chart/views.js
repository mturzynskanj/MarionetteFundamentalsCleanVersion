/**
 * Created by mariaturzynska on 2/17/15.
 */
var ChartLayoutView=Marionette.LayoutView.extend({
	template:"#chart-layout-template",
	regions:{
		leftSelection:"#leftSelection",
		title:"#title",
		topSelection:"#topSelection",
		chart:"#chart"
	}
});


var ChartSelectionItem= Marionette.ItemView.extend({
	template:"#selection-item-template",
	events:{
		'change :checkbox' : 'toggleStatus'
	},

	toggleStatus:function(){
        this.model.toggleStatus();
	},

	stockSelected:function(ev){
		ev.preventDefault();
		console.log('stock selectedfgfgfgf');
		this.model.select();
	}
});

var ChartListSelectionView=Marionette.CollectionView.extend({
	tagName:"ul",
	className:"test",
	childView:ChartSelectionItem

});

var ChartTopSelectionItem=Marionette.ItemView.extend({
	template:"#top-selection-item-template",
	events:{

	}
});

var ChartTopListSelectionView=Marionette.CollectionView.extend({
	tagName:"ul",
	className:'list',
	childView:ChartTopSelectionItem
});








