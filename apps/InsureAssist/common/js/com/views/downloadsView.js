//Includes file dependencies
define([ "jquery",
         "backbone",
         "com/collections/insureAssistLang",
         "underscoreText!downloadsViewTemplate",
         "com/utils/utils",
         "com/utils/downloads"], 
         function( $, 
        		   Backbone, 
        		   insureAssistLang,
        		   downloadsViewTemplate,
        		   utils,
        		  downloads){

	// Extends Backbone.View
	var DownloadsView = Backbone.View.extend({

		//initialize template 
		template:_.template(downloadsViewTemplate),

		attributes:{
			"data-role" : "page",
			"data-title": "Downloads",
			"class": "insureassist-downloads"
				
		},
		
		// Initializing
		initialize: function(){

			this.el.id = "downloads";
		},         

	
		render: function(){ 
			var langCollection = eval("insureAssistLang.langBundle_" + utils.language);
			var templ = _.template(downloadsViewTemplate, langCollection.downloadsPage);
			this.$el.html(templ);
			return this; 
		},
		
		events: {
			"pageshow": "onPageShow"
		},
		
		onPageShow: function(){
			downloads.display();
		}
	});

	// Returns the View class
	return DownloadsView;

});