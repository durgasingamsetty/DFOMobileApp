//Splash View
//=============

//Includes file dependencies
define([ "jquery",
         "backbone",
         "com/collections/insureAssistLang",
         "underscoreText!basicRegistrationViewTemplate",
         "com/utils/basicRegistration",
         "com/utils/utils",
         "com/utils/validateForm"], 
         function( $, 
        		   Backbone, 
        		   insureAssistLang,
        		   basicRegistrationViewTemplate,
        		   basicRegistration,
        		   utils,
        		   validateForm){

	// Extends Backbone.View
	var BasicRegistrationView = Backbone.View.extend({

		//initialize template 
		template:_.template(basicRegistrationViewTemplate),

		attributes:{
			"data-role" : "page",
			"data-title": "BasicRegistration",
			"class": "insureassist-basicregistration"

		},

		// Initializing
		initialize: function(){
			this.model = utils.getRegistrationModel();
			this.el.id = "basicregistration";
		},         

		//render the content into div of view 
		render: function(){ 

			var langCollection = eval("insureAssistLang.langBundle_" + utils.language);
			//this.el is the root element of Backbone.View. By default, it is a div.    
			//$el is cached jQuery object for the view�s element. 
			//append the compiled template into view div container
			var templ = _.template(basicRegistrationViewTemplate, langCollection.basicRegistrationPage);
			this.$el.html(templ);
			//this.$el.html(this.template());  
			return this; 
		},

		events: {
			"pageshow": "onPageShow",
			"click #registration_next_btn" : "onNextBtnClick",
			"click #reg-firstname-input": "onFirstNameClick",
			"click #reg-lastname-input": "onLastNameClick",
			"click #reg-email-input": "onEmailClick"
		},
		
		onPageShow: function(){
			basicRegistration.display();
		},
		
		onNextBtnClick: function(){
			
			if (basicRegistration.setBasicRegistration(this.model)) {
                // If validation success, then submit the data into the database
                return basicRegistration.submitBasicRegistration(this.model);
            } else {
                return false;
            }
		},
		
		onFirstNameClick: function(){
			basicRegistration.onFirstNameClick();
		},
		
		onLastNameClick: function(){
			basicRegistration.onLastNameClick();
		},
		
		onEmailClick: function(){
			basicRegistration.onEmailClick();
		}
	});

	// Returns the View class
	return BasicRegistrationView;

}); 