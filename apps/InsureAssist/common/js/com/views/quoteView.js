//Includes file dependencies
define([ "jquery",
         "backbone",
         "com/collections/insureAssistLang",
         "underscoreText!quoteViewTemplate",
         "com/utils/utils",
         "com/utils/quote"],
         function( $,
        		 Backbone,
        		 insureAssistLang,
        		 quoteViewTemplate,
        		 utils,
        		 quote){

//	Extends Backbone.View
	var QuoteView = Backbone.View.extend({

//		initialize template
		template:_.template(quoteViewTemplate),

		attributes:{
			"data-role" : "page",
			"data-title": "Quote",
			"class": "insureassist-quote"

		},

//		Initializing
		initialize: function(){

			this.el.id = "quote";
		},


		render: function(){
			var langCollection = eval("insureAssistLang.langBundle_" + utils.language);
			var templ = _.template(quoteViewTemplate, langCollection.quotePage);
			this.$el.html(templ);
			return this;
		},

		events: {
			"pageshow": "onPageShow",
			"click #pension-btn": "onRetriementPensionClick",
			"click #term-btn": "onTermInsuranceClick"
		},

		onPageShow: function(){
			quote.display();
		},
		
		/*onRetriementPensionClick: function(){
			quote.onRetriementPensionClick();
		},
		
		onTermInsuranceClick: function(){
			quote.onTermInsuranceClick();
		}*/
		
	});

//	Returns the View class
	return QuoteView;

});  