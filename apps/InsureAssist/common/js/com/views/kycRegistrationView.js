//Splash View
//=============

//Includes file dependencies
define([ "jquery",
         "backbone",
         "com/collections/insureAssistLang",
         "underscoreText!kycRegistrationViewTemplate",
         "com/utils/kycRegistration",
         "com/utils/utils",
         "com/utils/validateForm"], 
         function( $, 
        		   Backbone, 
        		   insureAssistLang,
        		   kycRegistrationViewTemplate,
        		   kycRegistration,
        		   utils,
        		   validateForm){
	// Extends Backbone.View
	var KycRegistrationView = Backbone.View.extend({

		//initialize template 
		template:_.template(kycRegistrationViewTemplate),

		attributes:{
			"data-role" : "page",
			"data-title": "KycRegistration",
			"class": "insureassist-kycregistration"

		},

		// Initializing
		initialize: function(){
			this.model = utils.getRegistrationModel();
			this.el.id = "kycregistration";
		},         

		//render the content into div of view 
		render: function(){ 
            
			var langCollection = eval("insureAssistLang.langBundle_" + utils.language);
			//this.el is the root element of Backbone.View. By default, it is a div.    
			//$el is cached jQuery object for the view�s element. 
			//append the compiled template into view div container 
			var templ = _.template(kycRegistrationViewTemplate, langCollection.kycRegistrationPage);
			this.$el.html(templ);
			//this.$el.html(this.template());  
			return this; 
		},

		events: {
			"pageshow": "onPageShow",
			"click #kyc_submit_btn" : "onSubmitBtnClick",
			"click #id-identity-proof-select-btn" : "onIdentityProofBtnClick",
			"click #id-address-proof-select-btn" : "onAddressProofBtnClick",
			"click #vid_pan" : "onPanDetailsClick",
			"click #reg-userid-input" : "onUserIdClick",
			"click #vid_password" : "onPasswordClick"
		},
        
		onPageShow: function(){
			kycRegistration.display();
		},
		
		onSubmitBtnClick: function(){
			
			if (kycRegistration.setKycRegistration(this.model)) {
                // If validation success, then submit the data into the database
                return kycRegistration.submitKycRegistration(this.model);
            } else {
                return false;
            }
		},
		
		onIdentityProofBtnClick: function() {
			kycRegistration.onIdentityProofBtnClick();
		},
		
		onAddressProofBtnClick: function() {
			kycRegistration.onAddressProofBtnClick();
		},
		
		onPanDetailsClick: function() {
			kycRegistration.onPanDetailsClick();
		},
		
		onUserIdClick: function() {
			kycRegistration.onUserIdClick();
		},
		
		onPasswordClick: function() {
			kycRegistration.onPasswordClick();
		}
		
	});

	// Returns the View class
	return KycRegistrationView;

}); 