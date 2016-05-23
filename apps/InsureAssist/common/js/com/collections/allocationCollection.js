//Includes file dependencies
define([

        "jquery",
        "backbone",
        "com/models/allocationModel"
        ], function($,
        		    Backbone,
        		    allocationModel) {

	// Language Collection: this contains all the strings for a particular language page wise
	var AllocationCollection = Backbone.Collection.extend({
		model: allocationModel
	});

	// Returns the Collection class
	return AllocationCollection;
});