//This file contains the business logic pertaining to the Landing Page

define([
        "jquery", 
        "backbone"
        ], function($, Backbone){

	var Login = Backbone.Model.extend({},
	{		
		/*data(optional) is what is passed from the previous view*/  
		display: function(data){
			console.log("Login Page opened succesfully");
		},
	});
	
	return Login;
});