//This file contains the business logic pertaining to the Dashboard Page

define([
        "jquery", 
        "backbone"
        ], function($, Backbone){

	var PieChartDataModel = Backbone.Model.extend({

		defaults:{
			
			"chartValues": null
		},
		
		initialize: function(values){
			this.set({values: values});
		}
	});
	return PieChartDataModel;
});