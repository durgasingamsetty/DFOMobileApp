//Includes file dependencies
define([ "jquery",
         "backbone",
         "com/collections/insureAssistLang",
         "com/utils/utils",
         "underscoreText!sidebarViewTemplate"
         ], 
         function( $, 
        		   Backbone, 
        		   insureAssistLang,
        		   utils,
        		   sidebarViewTemplate
        		   ){

	// Extends Backbone.View
	var SidebarView = Backbone.View.extend({

		//initialize template 
		template:_.template(sidebarViewTemplate),

		attributes:{
			"data-role": "controlgroup",
			"data-type": "vertical",
			"class" : "sidebar"
		},
		
		// Initializing
		initialize: function(){

		},         

	
		render: function(){ 
			var langCollection = eval("insureAssistLang.langBundle_" + utils.language);
			var templ = _.template(sidebarViewTemplate, langCollection.sidebar);
			this.$el.html(templ);
			return this; 
		},
		
		events: {
			"click .ui-btn": "onSidebarItemClick"
		},
		
		onSidebarItemClick: function(event){
			
			$(".ui-btn").removeClass("selected");
			$(event.target).addClass("selected");
		}
		
	});

	// Returns the View class
	return SidebarView;

});