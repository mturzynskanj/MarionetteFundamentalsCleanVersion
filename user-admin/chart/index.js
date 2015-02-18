/**
 * Created by mariaturzynska on 2/18/15.
 */
var ChartModule=function(settings){
  	var initialData=settings.initialData || [];

	var module={};
	module.app=settings.app || {};

	//collection
	module.collection=new StackSelectionCollection(initialData,{module:module});

	//router
	module.router=new ChartRouter({module:module});

	//controller
	module.controller=new ChartController({module:module});

	return module;

};
