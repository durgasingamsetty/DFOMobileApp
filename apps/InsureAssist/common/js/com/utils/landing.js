//This file contains the business logic pertaining to the Landing Page

define([
        "jquery", 
        "backbone"
        ], function($, Backbone){

	var Landing = Backbone.Model.extend({},
	{
	
		/*data(optional) is what is passed from the previous view*/  
		display: function(data){
			alert("Landing Page opened succesfully");
		}
	});
	
	return Landing;
});