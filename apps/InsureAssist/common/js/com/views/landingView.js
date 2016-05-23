//Landing View
//=============

//Includes file dependencies
define([ "jquery",
         "backbone",
         "underscoreText!landingViewTemplate",
         "com/utils/utils"], 
         function( $, 
        		   Backbone, 
        		   landingViewTemplate,
        		   utils){

	// Extends Backbone.View
	var LandingView = Backbone.View.extend({

		//initialize template 
		template:_.template(landingViewTemplate),

		attributes:{
			"data-role" : "page",
			"data-title": "Landing",
			"class": "ldg-main-background"
		},
		
		// Initializing
		initialize: function(){

			this.el.id = "landing";
			
			this.initApp();
			//utils.watchNetworkState();
			//utils.setupBackButtonHandling();
			//perform any other app related initializations and move to app screen
			this.appInitComplete();
			//utils.initFs();
		},         

		//render the content into div of view 
		render: function(){ 
			/*we pick the strings from a JS file. This is for multilingual support*/
			//var langCollection = eval("winLossLang.langBundle_" + utils.getLanguage());
			//this.el is the root element of Backbone.View. By default, it is a div.    
			//$el is cached jQuery object for the view�s element. 
			//append the compiled template into view div container 
			//var templ = _.template(loginViewTemplate, langCollection.loginPage);
			this.$el.html(this.template());  
			return this; 
		},

		initApp: function(){
//			TODO: add any initializations need to be done here
		},
		
		appInitComplete: function(){
			
			/*once the application initialization is complete, move to the start page of the app
			in this case we go to the login screen*/
			setTimeout(function(){
				window.router.navigateTo("#acctlogin");	
			}, 2000);
		},
		
		events: {
		},
		
	});

	// Returns the View class
	return LandingView;

});