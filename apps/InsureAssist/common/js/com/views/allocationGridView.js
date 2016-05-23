//Includes file dependencies
define([ "jquery",
         "backbone",
         "com/utils/utils",
         "underscoreText!allocationGridViewTemplate"
         ], 
         function( $, 
        		   Backbone, 
        		   utils,
        		   allocationGridViewTemplate
        		   ){

	// Extends Backbone.View
	var AllocationGridView = Backbone.View.extend({

		tagName: "li",
		
		//initialize template 
		template:_.template(allocationGridViewTemplate),

		//empty for now
		attributes:{
		},
		
		// Initializing
		initialize: function(){

		},         

	
		render: function(){
			var values = {FundName: this.model.get("fundName"),
						  AllocationPercentage: this.model.get("fundAllocatedPercent"),
						  AllocationValue : this.model.get("fundValue"),
						  GainPercentage : this.model.get("returnPercent")
                          };
			
			var templ = _.template(allocationGridViewTemplate, values);
			this.$el.html(templ);
			return this; 
		},
		
		events: {
		
		},
	});

	// Returns the View class
	return AllocationGridView;

});