//Includes file dependencies
define([

        "jquery",
        "backbone",
        "com/models/portFolioModel"
        ], function($,
        		    Backbone,
        		    portFolioModel) {

	// Language Collection: this contains all the strings for a particular language page wise
	var PortFolioCollection = Backbone.Collection.extend({
		model: portFolioModel
	});

	// Returns the Collection class
	return PortFolioCollection;
});