//Includes file dependencies
define([

        "jquery",
        "backbone",

        ], function($, Backbone) {

	// Language Collection: this contains all the strings for a particular language page wise
	var AllocationModel = Backbone.Model.extend({
		defaults:{
			
		}
	});

	// Returns the Collection class
	return AllocationModel;
});