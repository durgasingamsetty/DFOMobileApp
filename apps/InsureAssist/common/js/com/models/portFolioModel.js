//Includes file dependencies
define([

        "jquery",
        "backbone",

        ], function($, Backbone) {

	// Language Collection: this contains all the strings for a particular language page wise
	var PortFolioModel = Backbone.Model.extend({
		
		defaults:{
			
			policyName : null,
			policyNumber: null,
			z: null,
			policyType : null,
			assetValue : null,
			gainValue : null,
			gainPercent : null,
			policyStartDate : null,
			policyEndDate : null,
			lastPaymentDate : null,
			dueDate : null,
			policyAmount : null,
		}
	});

	// Returns the Collection class
	return PortFolioModel;
});