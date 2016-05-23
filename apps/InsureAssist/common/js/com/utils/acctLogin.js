//This file contains the business logic pertaining to the Landing Page

define([
        "jquery", 
        "backbone",
        ], function($, Backbone){

	var AcctLogin = Backbone.Model.extend({},
	{
		//this needs to be removed when demo scenario is completed
		defaultUserName: "asdf",
		defaultPassword: "qwerty",
		
		/*data(optional) is what is passed from the previous view*/  
		display: function(data){
			console.log("AcctLogin Page opened succesfully");
		},

		base64Encode: function(data){
			
			var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
			  var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
			    ac = 0,
			    enc = "",
			    tmp_arr = [];

			  if (!data) {
			    return data;
			  }

			  do { 
			    o1 = data.charCodeAt(i++);
			    o2 = data.charCodeAt(i++);
			    o3 = data.charCodeAt(i++);

			    bits = o1 << 16 | o2 << 8 | o3;

			    h1 = bits >> 18 & 0x3f;
			    h2 = bits >> 12 & 0x3f;
			    h3 = bits >> 6 & 0x3f;
			    h4 = bits & 0x3f;

			    tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
			  } while (i < data.length);

			  enc = tmp_arr.join('');

			  var r = data.length % 3;

			  return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
		},
		
		//make the adapter call to authenticate
		authenticate: function(username, password){
			
			//not to send username and password in plain text
			var encUserName = this.base64Encode(username);
			var encPassword = this.base64Encode(password);
			
			var invocationData = {
					adapter: 'SingleStepAuthAdapter', 
					procedure: 'submitAuthentication',
					parameters: [encUserName, encPassword]
				};
			
			var options = {};
			
			//adapter call
			var defObj = WL.Client.invokeProcedure(invocationData,options);
			
			//on call success
			defObj.done(function(result){
				
				//authentication failed - error message
				if(result.invocationResult.errorMessage){
					console.log("Authentication Failed:", result.invocationResult.errorMessage);
					//TODO: display error message
					$("#login-error-msg").text("Invalid Credentials").fadeIn();
				}
				else{
					console.log("Authentication successful");
					router.navigateTo("#dashboard");
				}
			});
			
			//on call failure
			defObj.fail(function(result){
				console.log("Authentication Failed");
				//TODO: display error message
			});
		},
		
		onLoginBtnClick: function(){
			
			var userName = this.defaultUserName;
			var password = this.defaultPassword;
			
			if($("#cust-id-fld").val() != ""){
				userName = $("#cust-id-fld").val();
			}
			
			if($("#pwd").val() != ""){
				password = $("#pwd").val();
			}
			
			this.authenticate(userName, password);
		},
		
		onCustomerIdClick: function(){
			$("#login-error-msg").fadeOut();
		}
	});
	
	return AcctLogin;
});