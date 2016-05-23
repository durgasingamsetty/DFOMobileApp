//Includes file dependencies
define([ "jquery",
         "backbone",
         "com/utils/utils",
         "underscoreText!allocationPopupViewTemplate"
         ], 
         function( $, 
        		   Backbone, 
        		   utils,
        		   allocationPopupViewTemplate
        		   ){

	// Extends Backbone.View
	var AllocationPopupView = Backbone.View.extend({

		tagName: "li",
		
		//initialize template 
		template:_.template(allocationPopupViewTemplate),

		//empty for now
		attributes:{
		},
		
		// Initializing
		initialize: function(){

		},         

	
		render: function(){
			var values = {FundName: this.model.get("fundName"),
						  AllocationPercentage: this.model.get("fundAllocatedPercent"),
                          };
			
			var templ = _.template(allocationPopupViewTemplate, values);
			this.$el.html(templ);
			return this; 
		},
		
		events: {
		
		},
	});

	// Returns the View class
	return AllocationPopupView;

});