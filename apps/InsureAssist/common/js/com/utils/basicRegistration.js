//This file contains the business logic pertaining to the New User Registration Page

define([
        "jquery", 
        "backbone",
        "com/collections/insureAssistLang",
        "com/utils/validateForm",
        ], function($,
        		    Backbone,
        		    insureAssistLang,
        		    validateForm){

	var BasicRegistration = Backbone.Model.extend({},
	{
	
		/*data(optional) is what is passed from the previous view*/  
		display: function(data){
		
		},
		
		setBasicRegistration: function(model){
			
			var value = $("#reg-firstname-input").val();
			model.set({firstName: value});
			
			var value = $("#reg-lastname-input").val();
			model.set({lastName: value});
			
			var value = $("#reg-email-input").val();
			model.set({email: value});
			
			
			return true;
		},
		
		submitBasicRegistration: function(model){
			
			if(validateForm.validateBasicRegistration(model)){
				//TODO: store wherever needed
				console.log("Stored data is:", model);
				return true;
			}
			return false;
		},
		
		onFirstNameClick: function(){
			 $("#firstname-error-highlight").hide();
			 $("#reg-firstname-input").removeClass("error-highlight");
		},
		
		onLastNameClick: function(){
			 $("#lastname-error-highlight").hide();
			 $("#reg-lastname-input").removeClass("error-highlight");
		},
		
		onEmailClick: function(){
			 $("#email-error-highlight").hide();
			 $("#reg-email-input").removeClass("error-highlight");
		}
		
	});
	
	
	return BasicRegistration;
});