//Login View
//=============

//Includes file dependencies
define([ "jquery",
         "backbone",
         "underscoreText!loginViewTemplate",
         "com/collections/insureAssistLang",
         "com/utils/login",
         "com/utils/utils"], 
         function( $, 
        		   Backbone, 
        		   loginViewTemplate,
        		   insureAssistLang,
        		   login,
        		   utils){

	// Extends Backbone.View
	var LoginView = Backbone.View.extend({

		//initialize template 
		template:_.template(loginViewTemplate),

		attributes:{
			"data-role" : "page",
			"data-title": "Login",
			"class": "lgn-main-background"
		},
		
		// Initializing
		initialize: function(){

			this.el.id = "login";
		},         

		//render the content into div of view 
		render: function(){ 

			var langCollection = eval("insureAssistLang.langBundle_" + utils.language);
			//this.el is the root element of Backbone.View. By default, it is a div.    
			//$el is cached jQuery object for the viewï¿½s element. 
			//append the compiled template into view div container
			var templ = _.template(loginViewTemplate, langCollection.loginPage);
			this.$el.html(templ);
			//this.$el.html(this.template());  
			return this; 
		},

		events: {
			"pageshow": "onPageShow"
		},
		
		onPageShow: function(){
			login.display();
		},
	});

	// Returns the View class
	return LoginView;

});