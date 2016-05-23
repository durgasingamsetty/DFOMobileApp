// Loads the Client List Summary - the landing page after login and splash
define([

    "jquery",
    "backbone"

], function($,
			Backbone) {

    var ValidateForm = Backbone.Model.extend({}, {
        
    	/* Validate Basic Registration */
        validateBasicRegistration: function(model) {

            var isSuccess = true;

            //alert($("#vid_regdate").val().length);

            if (!model.get("firstName")) {
            	 $("#reg-firstname-input").addClass("error-highlight");
                $("#firstname-error-highlight").show();
                isSuccess = false;
            }
            
            if (!model.get("lastName")) {
                $("#reg-lastname-input").addClass("error-highlight");
                $("#lastname-error-highlight").show();
                isSuccess = false;
            }
            
            
            if (!model.get("email")) {
                $("#reg-email-input").addClass("error-highlight");
                $("#email-error-highlight").show();           
                isSuccess = false;
            }
            
            return isSuccess;
        },
        
    	/* Validate KYC Registration */
        validateKycRegistration: function(model) {

            var isSuccess = true;

           //alert($("#vid_regdate").val().length);

            if (!model.get("panNumber")) {
                $("#pan-error-highlight").show();
                isSuccess = false;
            }
            
            if (!model.get("userId")) {
                $("#userid-error-highlight").show();
                isSuccess = false;
            }
            
            if (!model.get("password")) {
                $("#password-error-highlight").show();
                isSuccess = false;
            }
            return isSuccess;
        },
        
        validateFundAllocation: function(){
        	
        	var isSuccess = true;
        	var elms = $(".modify-span");
			var allocPercentage = 0;
			//get the total allocation
			for (var idx = 0; idx < elms.length; idx++){
				allocPercentage += parseInt(elms[idx].value);
			}
			//if allocation is not 100%, then dialog must not be closed
        	if(allocPercentage != 100){
        		 $("#modify-total-fund-lbl").addClass("total-fund-highlight");
        		isSuccess = false;
        	}
        	else{
        		$("#modify-total-fund-lbl").removeClass("total-fund-highlight");
        	}
        	return isSuccess;
        }

    });
    return ValidateForm;
});