//Includes file dependencies
define([ "jquery",
         "backbone",
         "com/collections/insureAssistLang",
         "underscoreText!dashboardViewTemplate",
         "com/utils/utils",
         "com/utils/dashboard"], 
         function( $, 
        		   Backbone, 
        		   insureAssistLang,
        		   dashboardViewTemplate,
        		   utils,
        		   dashboard){

	// Extends Backbone.View
	var DashboardView = Backbone.View.extend({

		//initialize template 
		template:_.template(dashboardViewTemplate),

		attributes:{
			"data-role" : "page",
			"data-title": "Dashboard",
			"class": "insureassist-dashboard"
				
		},
		
		// Initializing
		initialize: function(){
						this.el.id = "dashboard";
		},         

	
		render: function(){ 
			var langCollection = eval("insureAssistLang.langBundle_" + utils.language);
			var templ = _.template(dashboardViewTemplate, langCollection.dashboardPage);
			this.$el.html(templ);
			return this; 
		},
		
		events: {
			"pageshow": "onPageShow"
		},
		
		onPageShow: function(){
			dashboard.display();
		}
	});

	// Returns the View class
	return DashboardView;

});