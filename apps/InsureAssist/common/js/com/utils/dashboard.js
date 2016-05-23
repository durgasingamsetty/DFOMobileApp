//This file contains the business logic pertaining to the Dashboard Page

define([ "jquery",
         "backbone", 
         "com/models/pieChartDataModel",
         "com/models/insureAdvisorModel",
         "com/models/portFolioModel",
         "com/collections/portFolioCollection",
         "com/views/pieChartView", 
         "com/views/sidebarView",
         "com/views/portFolioListView",
         "com/models/quoteResultModel"], 
         	function($,
         			 Backbone, 
         			 pieChartDataModel,
         			 insureAdvisorModel,
         			 portFolioModel,
         			 portFolioCollection,
         			 pieChartView, 
         			 sidebarView,
         			 portFolioListView,
         			 quoteResultModel) {

	var Dashboard = Backbone.Model.extend({}, {

		sidebar : null,
		isPageLoaded : false, //we are using append strategy, hence we need to check if content has already been loaded
		ulipAllocation: null,
		retAllocation: null,
		lifeinsAllocation: null,
		dashboardCollection: new portFolioCollection(),

		/*data(optional) is what is passed from the previous view*/
		display : function(data) {
			var quoteResult = new quoteResultModel();
			quoteResult.set({premiumalreadyPaid: "1,59,700"});
			quoteResult.set({tobePaid: "20,360"});
			
			$("#premium-already-Paid").html(quoteResult.get("premiumalreadyPaid"));
			$("#to-be-Paid").html(quoteResult.get("tobePaid"));		

			if (!this.isPageLoaded) {
				this.insertSidebar();
				this.getUserAdvisor();
				this.getUserPortfolio();
				this.getUserApplicationStatus();
				this.getUserPremiumSummary();
				this.isPageLoaded = true;
			}

			
			
			if (this.sidebar) {
				// Call to trigger the click event in the sidebar - Home button will be selected
				this.sidebar.$("#id_dashboard_home").trigger("click");
			}
			
		},

		insertSidebar : function() {
			this.sidebar = new sidebarView();
			this.sidebar.render();

			$('#sidebar_container').append(this.sidebar.$el);
			$('#sidebar_container').trigger("create");
		},

		drawPieChart : function() {

			//			TODO: colors as per UI guide
			//			data hardcoded now
			var data = [ {
				'Name' : 'ULIP',
				'Value' : this.ulipAllocation,
				color : "#F19027"
			}, {
				'Name' : 'Retirement And Pensions',
				'Value' : this.retAllocation,
				color : "#8CC63F"
			}, {
				'Name' : 'Life Insurance',
				'Value' : this.lifeinsAllocation,
				color : "#00B2Ef"
			} ];

			var chartModel = new pieChartDataModel();
			chartModel.set({
				chartValues : data,
				title : " Asset Allocation"
			});

			//create a new pie chart view instance
			var pieChart = new pieChartView({
				el : $("#pie_chart_container"),
				model : chartModel
			});
			//render it
			pieChart.render();
		},

		
		createPortfolioLists : function(){

			var self = this;
			var idx = 0;
			
			this.dashboardCollection.forEach(function(){

				var allModel = self.dashboardCollection.at(idx);
				var portView = new portFolioListView({model: allModel});
				portView.render();
				
				/*Filtering on the basis of Policy type*/		
				
				if(allModel.get("policyType") == "ULIP"){
					$("#ulip_list").append(portView.$el);
				}
				
				else if(allModel.get("policyType") == "Retirement & Pensions"){
					$("#ret_list").append(portView.$el);
					//these actions are valid only for ULIP
					portView.$(".dashboard-viewalloc-label").hide();
					portView.$(".ins-listitem-assetvalue").hide();
					portView.$(".ins-listitem-overall-gain").hide();
				}
				
				else if(allModel.get("policyType") == "Life Insurance"){
					$("#lifeins_list").append(portView.$el);
					portView.$(".dashboard-viewalloc-label").hide();
					portView.$(".ins-listitem-assetvalue").hide();
					portView.$(".ins-listitem-overall-gain").hide();
				}
								
				portView.$el.trigger("create");
				idx++ ;
				if(idx == self.dashboardCollection.length){
					$("#ulip_list").listview();
					$("#ulip_list").listview("refresh");
					
					$("#ret_list").listview();
					$("#ret_list").listview("refresh");
					
					$("#lifeins_list").listview();
					$("#lifeins_list").listview("refresh");
				}
			});
		},
		
		//starting of InsureAssistAdapter- Fetching the advisor for each user

		onGetUserAdvisorSuccess : function(result) {
			if(result && result.invocationResult && result.invocationResult.advisor){
				var advisor = new insureAdvisorModel(result.invocationResult.advisor);
//				TODO: Simran to populate the UI using the values from this model
				var firstName = advisor.get("firstName");
				var lastName = advisor.get("lastName");
				//$("#ia-advisor-name").html(insureAdvisorModel.advisor.firstName);
				var name= firstName+ " "+ lastName;
				$("#ia-advisor-name").html(name);
			}
		},

		onGetUserAdvisorFailure : function(result) {
			console.log("Fetching Advisor details failed");
		},

		getUserAdvisor : function() {

			var invocationData = {
					adapter : 'InsureAssistAdapter',
					procedure : 'getAdvisors',
					parameters : []
			};

			var options = {
					onSuccess : this.onGetUserAdvisorSuccess,
					onFailure : this.onGetUserAdvisorFailure
			};

			WL.Client.invokeProcedure(invocationData, options);

		},

		//end of InsureAssistAdapter- Fetching the advisor for each user

		//starting of InsureAssistAdapter- Fetching the portfolio details for each user

		onGetUserPortfolioSuccess : function(result) {
			
			var fetchedPortFolio= result.invocationResult.policyList;	
			
			for(var idx = 0; idx < fetchedPortFolio.length; idx++){
				
				var model = new portFolioModel(fetchedPortFolio[idx].policy);
				this.dashboardCollection.add(model);
				
				//calculate the fund allocation percentages here
				if(model.get("policyType") == "ULIP"){
					this.ulipAllocation += model.get("amountInvested");
				}
				
				if(model.get("policyType") == "Retirement & Pensions"){
					this.retAllocation += model.get("amountInvested");
				}
				
				if(model.get("policyType") == "Life Insurance"){
					this.lifeinsAllocation += model.get("amountInvested");
				}
			}
			this.createPortfolioLists();
			this.drawPieChart();
		},

		onGetUserPortfolioFailure : function(result) {
			console.log("Fetching user portfolio details failed");
		},

		getUserPortfolio : function() {

			var invocationData = {
					adapter : 'InsureAssistAdapter',
					procedure : 'getPortfolioDetails',
					parameters : []
			};

			var options = {
			};
			var defObj = WL.Client.invokeProcedure(invocationData, options);
			var self = this;
			
			defObj.done(function(result){
				self.onGetUserPortfolioSuccess(result);
			});
			
			defObj.fail(function(result){
				self.onGetUserPortfolioFailure(result);
			});
		},

		//end of InsureAssistAdapter- Fetching the portfolio details for each user
		//starting of InsureAssistAdapter- Fetching the application status for each user

		onGetUserApplicationStatusSuccess : function(result) {
			 var fetchedApplicationStatus= result.invocationResult.appStatus;			
			 console.log("Fetching user application status succcessful. Result is: ",
					 fetchedApplicationStatus);

		},

		onGetUserApplicationStatusFailure : function(result) {
			console.log("Fetching user application status failed");
		},

		getUserApplicationStatus : function() {
			
			var invocationData = {
				adapter : 'InsureAssistAdapter',
				procedure : 'getApplicationStatus',
				parameters : []
			};

			var options = {
				onSuccess : this.onGetUserApplicationStatusSuccess,
				onFailure : this.onGetUserApplicationStatusFailure
			};

			WL.Client.invokeProcedure(invocationData, options);
		},

		//end of InsureAssistAdapter- Fetching the application status for each user
		
		//starting of InsureAssistAdapter- Fetching the yearly premium summary for each user

		onGetUserPremiumSummarySuccess : function(result) {
			 /*var fetchedPremiumSummary= result.invocationResult.premiumSummary;			
			 console.log("Fetching user premium summary succcessful. Result is: ",
					 fetchedPremiumSummary);*/
			
			if(result && result.invocationResult && result.invocationResult.premiumSummary){
				var advisor = new insureAdvisorModel(result.invocationResult.premiumSummary);
				var premiumPaid = advisor.get("premiumPaid");
				var premiumToBePaid = advisor.get("premiumToBePaid");
				$("#premium-already-Paid").html(premiumPaid);
				$("#to-be-Paid").html(premiumToBePaid);
			}

		},

		onGetUserPremiumSummaryFailure : function(result) {
			console.log("Fetching user premium summary failed");
		},

		getUserPremiumSummary : function() {
			
			var invocationData = {
				adapter : 'InsureAssistAdapter',
				procedure : 'getPremiumSummary',
				parameters : []
			};

			var options = {
				onSuccess : this.onGetUserPremiumSummarySuccess,
				onFailure : this.onGetUserPremiumSummaryFailure
			};

			WL.Client.invokeProcedure(invocationData, options);
		}

		//end of InsureAssistAdapter- Fetching the yearly premium summary for each user
		
	});

	return Dashboard;
});