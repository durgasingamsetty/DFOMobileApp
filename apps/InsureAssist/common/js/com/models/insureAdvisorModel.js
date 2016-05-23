//Includes file dependencies
define([

        "jquery",
        "backbone",

        ], function($, Backbone) {

	// Language Collection: this contains all the strings for a particular language page wise
	var InsureAdvisorModel = Backbone.Model.extend({
		defaults:{
			firstName: null,
			lastName: null,
			emailId: null,
			contact: null
		}
	});

	// Returns the Collection class
	return InsureAdvisorModel;
});