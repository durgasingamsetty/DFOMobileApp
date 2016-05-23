//Includes file dependencies
define([ "jquery",
         "backbone",
         "com/collections/insureAssistLang",
         "underscoreText!quoteListItemViewTemplate",
         "com/utils/utils"],
         function( $,
        		 Backbone,
        		 insureAssistLang,
        		 quoteListItemViewTemplate,
        		 utils){

//	Extends Backbone.View
	var QuoteListItemView = Backbone.View.extend({

//		initialize template
		template:_.template(quoteListItemViewTemplate),
		
//		Initializing
		initialize: function(){

		},
		
		attributes: {
			class: "swiper-slide"
		},

		render: function(){
			var langCollection = eval("insureAssistLang.langBundle_" + utils.language);
			var values = {model: this.model, 
						  lang: langCollection.quotePage,
						  };
			var templ = _.template(quoteListItemViewTemplate, values);
			this.$el.html(templ);
			return this;
		},

		events: {
			"click .ui-btn.continue-button": "onContinueBtnClick"
		},
		
		onContinueBtnClick: function(){
			if(this.model.get("policyType") == "Retirement And Pension"){
			router.navigateTo("#retirementpension", this.model);
			}
			
			if(this.model.get("policyType")  == "Term Insurance"){
			router.navigateTo("#termlifeplan", this.model);
			}
		}

	});

//	Returns the View class
	return QuoteListItemView;

});  