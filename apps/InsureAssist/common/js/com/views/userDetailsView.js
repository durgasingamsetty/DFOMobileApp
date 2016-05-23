//Splash View
//=============

//Includes file dependencies
define([ "jquery",
         "backbone",
         "com/collections/insureAssistLang",
         "underscoreText!userDetailsViewTemplate",
         "com/utils/userDetails",
         "com/utils/utils"], 
         function( $, 
        		   Backbone, 
        		   insureAssistLang,
        		   userDetailsViewTemplate,
        		   userDetails,
        		   utils){
	// Extends Backbone.View
	var UserDetailsView = Backbone.View.extend({

		//initialize template 
		template:_.template(userDetailsViewTemplate),

		attributes:{
			"data-role" : "page",
			"data-title": "UserDetails",
			"class": "insureassist-userDetails"

		},

		// Initializing
		initialize: function(){

			this.el.id = "userdetails";
		},         

		//render the content into div of view 
		render: function(){ 
            
			var langCollection = eval("insureAssistLang.langBundle_" + utils.language);
			//this.el is the root element of Backbone.View. By default, it is a div.    
			//$el is cached jQuery object for the view�s element. 
			//append the compiled template into view div container 
			var templ1 = _.template(userDetailsViewTemplate, langCollection.userDetailsPage);
			this.$el.html(templ1);
			
			return this; 
		},

		events: {
			"pageshow": "onPageShow",
			"click #continue-btn": "onContinueBtnClick" 
		},
		
		onPageShow: function(){
			userDetails.display();
		},
		
		onContinueBtnClick: function(){
			userDetails.onContinueBtnClick();
		} 
	});

	// Returns the View class
	return UserDetailsView;
}); 