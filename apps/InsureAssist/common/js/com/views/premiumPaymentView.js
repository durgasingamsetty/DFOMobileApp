//Splash View
//=============

//Includes file dependencies
define([ "jquery",
         "backbone",
         "com/collections/insureAssistLang",
         "underscoreText!premiumPaymentViewTemplate",
         "com/utils/premiumPayment",
         "com/utils/utils"], 
         function( $, 
        		   Backbone, 
        		   insureAssistLang,
        		   premiumPaymentViewTemplate,
        		   premiumPayment,
        		   utils){
	// Extends Backbone.View
	var PremiumPaymentView = Backbone.View.extend({

		//initialize template 
		template:_.template(premiumPaymentViewTemplate),

		attributes:{
			"data-role" : "page",
			"data-title": "PremiumPayment",
			"class": "insureassist-premiumPayment"

		},

		// Initializing
		initialize: function(){

			this.el.id = "premiumpayment";
		},         

		//render the content into div of view 
		render: function(){ 
            
			var langCollection = eval("insureAssistLang.langBundle_" + utils.language);
			//this.el is the root element of Backbone.View. By default, it is a div.    
			//$el is cached jQuery object for the view�s element. 
			//append the compiled template into view div container 
			var templ = _.template(premiumPaymentViewTemplate, langCollection.premiumPaymentPage);
			this.$el.html(templ);
			//this.$el.html(this.template());  
			return this; 
		},

		events: {
			"pageshow": "onPageShow"
		},
		
		onPageShow: function(){
			premiumPayment.display();
		}
	});

	// Returns the View class
	return PremiumPaymentView;
}); 