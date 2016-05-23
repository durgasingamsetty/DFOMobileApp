//This file contains the business logic pertaining to the Dashboard Page

define([
        "jquery", 
        "backbone"
        ], function($, Backbone){

	var QuoteResultModel = Backbone.Model.extend({

		defaults:{
			corpusAmount: null,
			monthlyAmount: null,
			quarterlyAmount: null,
			hlyAmount: null,
			yearlyAmount: null,
			premiumalreadyPaid: null,
			tobePaid: null,
		},
		
		initialize: function(){
			
		}
	});
	return QuoteResultModel;
});