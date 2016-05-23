//Includes file dependencies
define([ "jquery",
         "backbone",
         "com/collections/insureAssistLang",
         "underscoreText!assetAllocationViewTemplate",
         "com/utils/utils",
         "com/utils/assetAllocation"], 
         function( $, 
        		   Backbone, 
        		   insureAssistLang,
        		   assetAllocationViewTemplate,
        		   utils,
        		   assetAllocation){

	// Extends Backbone.View
	var AssetAllocationView = Backbone.View.extend({

		//initialize template 
		template:_.template(assetAllocationViewTemplate),

		attributes:{
			"data-role" : "page",
			"data-title": "AssetAllocation",
			"class": "insureassist-assetAllocation"
				
		},
		
		// Initializing
		initialize: function(){
			
			this.model = utils.getModifyFundAllocationModel();
			this.el.id = "assetAllocation";
		},         

	
		render: function(){ 
			var langCollection = eval("insureAssistLang.langBundle_" + utils.language);
			var templ = _.template(assetAllocationViewTemplate, langCollection.assetAllocationPage);
			this.$el.html(templ);
			return this; 
		},
		
		events: {
			"pageshow": "onPageShow",
			"click #asset-modify": "onClickModify",
			"click #fund-submit" : "onPopupSubmitClick",
			"click #fund-cancel" : "onPopupCancelClick",
			"change input": "onInputValueChange"
		},
		
		onPageShow: function(){
			assetAllocation.display();
		},
		
		onClickModify: function(){
			
			assetAllocation.onClickModify();
			/*assetAllocation.openPopupModify();*/
		},
		
		onPopupCancelClick: function(){
			
			assetAllocation.onPopupCancelClick();
		},
		
		onPopupSubmitClick: function(){
			
			if (assetAllocation.setAssetAllocation(this.model)) {
                // If input fields not empty, then submit the data
                return assetAllocation.submitAssetAllocation(this.model);
            } else {
                return false;
            }
		},
		
		onInputValueChange: function(){
			assetAllocation.onInputValueChange();
		}
	});

	// Returns the View class
	return AssetAllocationView;

});