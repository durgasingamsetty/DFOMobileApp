//This file contains the business logic pertaining to the New User Registration Page

define([
        "jquery", 
        "backbone",
        "com/collections/insureAssistLang",
        "com/utils/validateForm",
        ], function($,
        		Backbone,
        		insureAssistLang,
        		validateForm){

	var KycRegistration = Backbone.Model.extend({},
	{

		/*data(optional) is what is passed from the previous view*/  
		display: function(data){

		},

		setKycRegistration: function(model){

			var value = $("#vid_pan").val();
			model.set({panNumber: value});

			value = $("#reg-userid-input").val();
			model.set({userId: value});

			value = $("#vid_password").val();
			model.set({password: value});

			return true;
		},
		
		onIdentityProofBtnClick: function(){
			navigator.camera.getPicture( this.onIdProofSuccess, this.onFail, 
					 { destinationType: Camera.DestinationType.DATA_URL,
					   sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
					   mediaType: Camera.MediaType.PICTURE });
		},
		
		onAddressProofBtnClick: function(){
			navigator.camera.getPicture( this.onAddrProofSuccess, this.onFail, 
					 { destinationType: Camera.DestinationType.DATA_URL,
					   sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
					   mediaType: Camera.MediaType.PICTURE });			
		},
		
		onIdProofSuccess: function(imageData) {
			var image = document.getElementById('identity-proof-img');
			image.src = "data:image/jpeg;base64," + imageData;
			$(image).show();
		},
		
		onAddrProofSuccess: function(imageData) {
			var image = document.getElementById('address-proof-img');
			image.src = "data:image/jpeg;base64," + imageData;
			$(image).show();
		},

		onFail: function(message) {
		    //alert('Failed because: ' + message);
		},		

		onUserRegnSuccess: function(result){
			console.log("User registration succcessful. Result is: ", result);
		},
		
		onUserRegnFailure: function(result){
			console.log("User registration failed");
		},
		
		submitKycRegistration: function(model){
			
			//we check that all mandatory fields are filled. Then we post this to the adapter
			if(validateForm.validateKycRegistration(model)){

				var jsonStr = JSON.stringify(model);
				var invocationData = {
					adapter: 'UserRegistrationAdapter', 
					procedure: 'createUser',
					parameters: [model.toJSON()]
				};
				
				var options = {
					onSuccess : this.onUserRegnSuccess, onFailure : this.onUserRegnFailure
				};
				
				WL.Client.invokeProcedure(invocationData,options);
				return true;
			}
			return false;
		},
		
		onPanDetailsClick: function() {
			$("#pan-error-highlight").hide();
		},
		
		onUserIdClick: function() {
			 $("#userid-error-highlight").hide();
		},
		
		onPasswordClick: function() {
			$("#password-error-highlight").hide();
		}
		
	});
	return KycRegistration;
});