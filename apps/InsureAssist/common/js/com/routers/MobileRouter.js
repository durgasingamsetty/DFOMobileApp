//Mobile Router
//=============

//Includes file dependencies
define([ "jquery",
         "backbone",
         "com/utils/utils",
         "com/views/landingView",
         "com/views/loginView",
         "com/views/acctLoginView",
         "com/views/basicRegistrationView",
         "com/views/kycRegistrationView",
         "com/views/premiumPaymentView",
         "com/views/quoteView",
         "com/views/downloadsView",
         "com/views/dashboardView",
         "com/views/retirementPensionView",
         "com/views/userDetailsView",
         "com/views/termLifePlanView",
         "com/views/assetAllocationView",
         ], function( $, 
	        		  Backbone,
	        		  utils,
	        		  LandingView,
	        		  LoginView,
	        		  AcctLoginView,
	        		  BasicRegistrationView,
	        		  KycRegistrationView,
	        		  PremiumPaymentView,
	        		  QuoteView,
	        		  DownloadsView,
	        		  DashboardView,
	        		  RetirementPensionView,
	        		  UserDetailsView,
	        		  TermLifePlanView,
	        		  AssetAllocationView) {
	
		// Extends Backbone.Router
		var InsureAssistRouter = Backbone.Router.extend({
	
			domOption: "append", //content keeps changing with the data 
	
			// The Router constructor
			initialize: function() {
	
				this.ldgView = null;
				this.lgnView = null;
				this.acctlgnView = null;
				this.bregView = null;
				this.ureg2View =null;
				this.pmntView =null;
				this.qteView =null;
				this.dwnldsView =null;
				this.rtrmtView = null;
				this.userdView = null;
				this.trmlpView = null;
				this.astalocView = null;
				// Tells Backbone to start watching for hashchange events
				Backbone.history.start();
			},
	
			// Backbone.js Routes
			routes: {
				// When there is no hash bang on the url, the home method is called
				"": "landingView",
				"login": "loginView",
				"acctlogin": "acctLoginView",
				"basicregistration": "basicRegistrationView",
				"kycregistration": "kycRegistrationView",
				"premiumpayment" : "premiumPaymentView",
				"quote": "quoteView",
				"downloads" : "downloadsView",
				"dashboard": "dashboardView",
				"retirementpension"	:	"retirementPensionView",
				"userdetails"	:	"userDetailsView",
				"termlifeplan"	:	"termLifePlanView",
				"assetAllocation" : "assetAllocationView",
				"none": ""
			},
	
			/*by default, when we move from one page to another, the contents of the previous 
			page are removed from the DOM. But this can be altered such that the DOM's contents are appended.
			This is useful if heavy pages like Google Maps, Twitter timelines are a part of the app's use cases*/
			setDomOption: function(domOption){
				this.domOption = domOption;
			},
	
			// Landing Method
			landingView: function() {
	
				if(!this.ldgView){
					this.ldgView = new LandingView();
					this.ldgView.render();
					this.addContent(this.ldgView);
				}
							
				//$.mobile.changePage($("#"),{changeHash:false, transition: _transition, reloadPage: false});
			},

			loginView: function() {
				
				if(this.domOption == "replace"){
					
					this.lgnView = new LoginView();
					this.lgnView.render();
					this.replaceContent(this.lgnView);
					$.mobile.changePage($("#login"),{changeHash:false, transition: _transition, reloadPage: true});
				}
				else if(this.domOption == "append"){
				
					if(!this.lgnView){
						this.lgnView = new LoginView();
						this.lgnView.render();
						this.addContent(this.lgnView);
						$.mobile.changePage($("#login"),{changeHash:false, transition: _transition, reloadPage: true});
					}
					else{
						$.mobile.changePage($("#login"),{changeHash:false, transition: _transition, reloadPage: false});
					}
				}			
			},
			
			acctLoginView: function() {
				
				if(this.domOption == "replace"){
					
					this.acctlgnView = new AcctLoginView();
					this.acctlgnView.render();
					this.replaceContent(this.acctlgnView);
					$.mobile.changePage($("#acctlogin"),{changeHash:false, transition: _transition, reloadPage: true});
				}
				else if(this.domOption == "append"){
				
					if(!this.acctlgnView){
						this.acctlgnView = new AcctLoginView();
						this.acctlgnView.render();
						this.addContent(this.acctlgnView);
						$.mobile.changePage($("#acctlogin"),{changeHash:false, transition: _transition, reloadPage: true});
					}
					else{
						$.mobile.changePage($("#acctlogin"),{changeHash:false, transition: _transition, reloadPage: false});
					}
				}			
			},


			basicRegistrationView: function(){

				if(this.domOption == "replace"){

					this.bregView = new BasicRegistrationView();
					this.bregView.render();
					this.replaceContent(this.bregView);
					$.mobile.changePage($("#basicregistration"),{changeHash:false, transition: _transition, reloadPage: true});
				}
				else if(this.domOption == "append"){

					if(!this.bregView){
						this.bregView = new BasicRegistrationView();
						this.bregView.render();
						this.addContent(this.bregView);
						$.mobile.changePage($("#basicregistration"),{changeHash:false, transition: _transition, reloadPage: true});
					}
					else{
						$.mobile.changePage($("#basicregistration"),{changeHash:false, transition: _transition, reloadPage: false});
					}
				}
			}, 
	
			kycRegistrationView: function(){

				if(this.domOption == "replace"){

					this.kregView = new KycRegistrationView();
					this.kregView.render();
					this.replaceContent(this.kregView);
					$.mobile.changePage($("#kycregistration"),{changeHash:false, transition: _transition, reloadPage: true});
				}
				else if(this.domOption == "append"){

					if(!this.kregView){
						this.kregView = new KycRegistrationView();
						this.kregView.render();
						this.addContent(this.kregView);
						$.mobile.changePage($("#kycregistration"),{changeHash:false, transition: _transition, reloadPage: true});
					}
					else{
						$.mobile.changePage($("#kycregistration"),{changeHash:false, transition: _transition, reloadPage: false});
					}
				}
			},
			
			premiumPaymentView: function(){

				if(this.domOption == "replace"){

					this.pmntView = new PremiumPaymentView();
					this.pmntView.render();
					this.replaceContent(this.pmntView);
					$.mobile.changePage($("#premiumpayment"),{changeHash:false, transition: _transition, reloadPage: true});
				}
				else if(this.domOption == "append"){

					if(!this.pmntView){
						this.pmntView = new PremiumPaymentView();
						this.pmntView.render();
						this.addContent(this.pmntView);
						$.mobile.changePage($("#premiumpayment"),{changeHash:false, transition: _transition, reloadPage: true});
					}
					else{
						$.mobile.changePage($("#premiumpayment"),{changeHash:false, transition: _transition, reloadPage: false});
					}
				}
			}, 
			
			quoteView: function(){

				if(this.domOption == "replace"){

					this.qteView = new QuoteView();
					this.qteView.render();
					this.replaceContent(this.qteView);
					$.mobile.changePage($("#quote"),{changeHash:false, transition: _transition, reloadPage: true});
				}
				else if(this.domOption == "append"){

					if(!this.qteView){
						this.qteView = new QuoteView();
						this.qteView.render();
						this.addContent(this.qteView);
						$.mobile.changePage($("#quote"),{changeHash:false, transition: _transition, reloadPage: true});
					}
					else{
						$.mobile.changePage($("#quote"),{changeHash:false, transition: _transition, reloadPage: false});
					}
				}        	
			},
			
			downloadsView: function(){

				if(this.domOption == "replace"){

					this.dwnldsView = new DownloadsView();
					this.dwnldsView.render();
					this.replaceContent(this.dwnldsView);
					$.mobile.changePage($("#downloads"),{changeHash:false, transition: _transition, reloadPage: true});
				}
				else if(this.domOption == "append"){

					if(!this.dwnldsView){
						this.dwnldsView = new DownloadsView();
						this.dwnldsView.render();
						this.addContent(this.dwnldsView);
						$.mobile.changePage($("#downloads"),{changeHash:false, transition: _transition, reloadPage: true});
					}
					else{
						$.mobile.changePage($("#downloads"),{changeHash:false, transition: _transition, reloadPage: false});
					}
				}        	
			},

			
			dashboardView: function(){

				if(this.domOption == "replace"){

					this.dshbdView = new DashboardView();
					this.dshbdView.render();
					this.replaceContent(this.dshbdView);
					$.mobile.changePage($("#dashboard"),{changeHash:false, transition: _transition, reloadPage: true});
				}
				else if(this.domOption == "append"){

					if(!this.dshbdView){
						this.dshbdView = new DashboardView();
						this.dshbdView.render();
						this.addContent(this.dshbdView);
						$.mobile.changePage($("#dashboard"),{changeHash:false, transition: _transition, reloadPage: true});
					}
					else{
						$.mobile.changePage($("#dashboard"),{changeHash:false, transition: _transition, reloadPage: false});
					}
				}        	
			},

			
			retirementPensionView: function(){

				if(this.domOption == "replace"){

					this.rtrmtView = new RetirementPensionView();
					this.rtrmtView.render();
					this.replaceContent(this.rtrmtView);
					$.mobile.changePage($("#retirementpension"),{changeHash:false, transition: _transition, reloadPage: true});
				}
				else if(this.domOption == "append"){

					if(!this.rtrmtView){
						this.rtrmtView = new RetirementPensionView();
						this.rtrmtView.render();
						this.addContent(this.rtrmtView);
						$.mobile.changePage($("#retirementpension"),{changeHash:false, transition: _transition, reloadPage: true});
					}
					else{
						$.mobile.changePage($("#retirementpension"),{changeHash:false, transition: _transition, reloadPage: false});
					}
				}        	
			},
			
			userDetailsView: function(){

				if(this.domOption == "replace"){

					this.userdView = new UserDetailsView();
					this.userdView.render();
					this.replaceContent(this.userdView);
					$.mobile.changePage($("#userdetails"),{changeHash:false, transition: _transition, reloadPage: true});
				}
				else if(this.domOption == "append"){

					if(!this.userdView){
						this.userdView = new UserDetailsView();
						this.userdView.render();
						this.addContent(this.userdView);
						$.mobile.changePage($("#userdetails"),{changeHash:false, transition: _transition, reloadPage: true});
					}
					else{
						$.mobile.changePage($("#userdetails"),{changeHash:false, transition: _transition, reloadPage: false});
					}
				}        	
			},
			
			termLifePlanView: function(){

				if(this.domOption == "replace"){

					this.trmlpView = new TermLifePlanView();
					this.trmlpView.render();
					this.replaceContent(this.trmlpView);
					$.mobile.changePage($("#termlifeplan"),{changeHash:false, transition: _transition, reloadPage: true});
				}
				else if(this.domOption == "append"){

					if(!this.trmlpView){
						this.trmlpView = new TermLifePlanView();
						this.trmlpView.render();
						this.addContent(this.trmlpView);
						$.mobile.changePage($("#termlifeplan"),{changeHash:false, transition: _transition, reloadPage: true});
					}
					else{
						$.mobile.changePage($("#termlifeplan"),{changeHash:false, transition: _transition, reloadPage: false});
					}
				}        	
			},
			
			
			assetAllocationView: function(){

				if(this.domOption == "replace"){

					this.astalocView = new AssetAllocationView();
					this.astalocView.render();
					this.replaceContent(this.astalocView);
					$.mobile.changePage($("#assetAllocation"),{changeHash:false, transition: _transition, reloadPage: true});
				}
				else if(this.domOption == "append"){

					if(!this.astalocView){
						this.astalocView = new AssetAllocationView();
						this.astalocView.render();
						this.addContent(this.astalocView);
						$.mobile.changePage($("#assetAllocation"),{changeHash:false, transition: _transition, reloadPage: true});
					}
					else{
						$.mobile.changePage($("#assetAllocation"),{changeHash:false, transition: _transition, reloadPage: false});
					}
				}        	
			},
			
			replaceContent: function(view){
	
				$("#content").empty(); 
				/*backbone adds an empty DIV element. This causes non uniform DOM structure,
		    	which is not as per JQueryMobile's page boilerplate*/ 
				$("#content").append(view.$el);
			},
	
			addContent: function (view) {
	
				/*backbone adds an empty DIV element. This causes non uniform DOM structure,
		    	which is not as per JQueryMobile's page boilerplate*/ 
				$("#content").append(view.$el);
			},
	
			//TODO: data needs to be passed from one page to another
			navigateTo: function(pageUrl, data){
	
				utils.setViewParams(data);
				this.navigate(pageUrl, {trigger: true});
			}
		});
		
		// Returns the Router class
		return InsureAssistRouter;
}); // define