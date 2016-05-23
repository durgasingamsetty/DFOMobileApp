//Includes file dependencies
define([ "jquery",
         "backbone",
         "com/utils/utils",
         "com/collections/insureAssistLang",
         "underscoreText!portFolioListViewTemplate"
         ], 
         function( $, 
        		   Backbone, 
        		   utils,
        		   insureAssistLang,
        		   portFolioListViewTemplate
        		   ){

	// Extends Backbone.View
	var PortFolioListView = Backbone.View.extend({
		
		tagName: "li",
		
		//initialize template 
		template:_.template(portFolioListViewTemplate),

		//empty for now
		attributes:{
		},
		
		// Initializing
		initialize: function(){

		},         
	
		render: function(){
			var langCollection = eval("insureAssistLang.langBundle_" + utils.language);
			var values = {
						  model: this.model,
					      lang: langCollection.dashboardPage};
			
			
			var templ = _.template(portFolioListViewTemplate, values);
			this.$el.html(templ);
			return this; 
		},
		
		events: {
		
		},
	});

	// Returns the View class
	return PortFolioListView;

});