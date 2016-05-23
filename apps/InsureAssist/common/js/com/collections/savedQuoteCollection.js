//Includes file dependencies
define([

        "jquery",
        "backbone",
        "com/models/savedQuoteModel"
        ], function($,
        		    Backbone,
        		    savedQuoteModel) {

	// Language Collection: this contains all the strings for a particular language page wise
	var SavedQuoteCollection = Backbone.Collection.extend({
		model: savedQuoteModel
	});

	// Returns the Collection class
	return SavedQuoteCollection;
});