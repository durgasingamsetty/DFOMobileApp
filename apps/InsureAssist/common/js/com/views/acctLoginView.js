//Login View
//=============

//Includes file dependencies
define([ "jquery",
         "backbone",
         "underscoreText!acctLoginViewTemplate",
         "com/collections/insureAssistLang",
         "com/utils/acctLogin",
         "com/utils/utils"
         ], 
         function( $, 
        		   Backbone, 
        		   acctLoginViewTemplate,
        		   insureAssistLang,
        		   acctLogin,
        		   utils
        		   ){

	// Extends Backbone.View
	var AcctLoginView = Backbone.View.extend({

		//initialize template 
		template:_.template(acctLoginViewTemplate),

		attributes:{
			"data-role" : "page",
			"data-title": "AcctLogin",
			"class": "lgn-main-background"
		},
		
		// Initializing
		initialize: function(){

			this.el.id = "acctlogin";
		},         

		//render the content into div of view 
		render: function(){ 

			var langCollection = eval("insureAssistLang.langBundle_" + utils.language);
			//this.el is the root element of Backbone.View. By default, it is a div.    
			//$el is cached jQuery object for the viewï¿½s element. 
			//append the compiled template into view div container
			var templ = _.template(acctLoginViewTemplate, langCollection.acctLoginPage);
			this.$el.html(templ);
			//this.$el.html(this.template());  
			return this; 
		},

		events: {
			"click #acntLoginid": "onLoginBtnClick",
			"click #cust-id-fld": "onCustomerIdClick"
		},
		
		onLoginBtnClick: function(){
			acctLogin.onLoginBtnClick();
		},
		
		onCustomerIdClick: function(){
			acctLogin.onCustomerIdClick();
		}
		
	});

	// Returns the View class
	return AcctLoginView;

});