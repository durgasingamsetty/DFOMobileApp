//This file contains the business logic pertaining to the New User Registration Page

define([
        "jquery", 
        "backbone",
        "com/collections/insureAssistLang",
        "com/views/sidebarView",
        "com/models/quoteResultModel",
        "com/models/savedQuoteModel",
        "com/utils/utils"
        ], 
        function($, 
        		 Backbone, 
        		 insureAssistLang,
        		 sidebarView,
        		 quoteResultModel,
        		 savedQuoteModel,
        		 utils){

	var RetirementPension = Backbone.Model.extend({},
	{
	    sidebar: null,
		quoteModel: new savedQuoteModel(),
	    isPageLoaded: false,
	    transitionDuration: 1000,
	    stubCount: 0,
	    
	    prepopulateUI: function(data){
	    	this.quoteModel = data;
	    	var gender = this.quoteModel.get("gender");
	    	if(gender == "male") {
	    		$("#female-icon").removeClass("selected");
	    		$("#male-icon").addClass("selected");
	    	}
	    	else {
	    		$("#female-icon").addClass("selected");
				$("#male-icon").removeClass("selected");
	    	}
	    	

	    	var dob = this.quoteModel.get("dateOfBirth");
	    	$("#rp-dob").val(dob);
	    	
	    	var policyTerm = this.quoteModel.get("policyTerm");
	    	$("#retirement-plan-yrs").val(policyTerm);
	    	var minAge = this.quoteModel.get("minAge");
	    	$("#age-starts").val(minAge).slider("refresh");
	    	var maxAge = this.quoteModel.get("maxAge");
	    	$("#age-ends").val(maxAge).slider("refresh");
	    	

	    	var incomeAftrRtrmt = this.quoteModel.get("incomeAftrRtrmt");
	    	$("#income-after-retirement").val(incomeAftrRtrmt).slider("refresh");
	    	
	    	var lifeExpectancy = this.quoteModel.get("lifeExpectancy");
	    	$("#life-expectancy-range").val(lifeExpectancy).slider("refresh");
	    	
	    	var inflationRange = this.quoteModel.get("inflationRange");
	    	$("#inflation-rate-percent").val(inflationRange).slider("refresh");
	    	
	    	var formattedCorpus = "Rs. " + this.quoteModel.get("corpusAmount") ;
			var formattedMonthly = this.quoteModel.get("monthlyPremium") ;
			var formattedQuarterly = this.quoteModel.get("quarterlyPremium") ;
			var formattedHly = this.quoteModel.get("hlyPremium") ;
			var formattedYearly = this.quoteModel.get("yearlyPremium") ;
			
			$(".retirement-premium-label-3").html(formattedCorpus);
			$("#payment-cal-lbl-4").html(formattedMonthly);
			$("#payment-cal-lbl-6").html(formattedQuarterly);
			$("#payment-cal-lbl-8").html(formattedHly);
			$("#payment-cal-lbl-10").html(formattedYearly);

	    },
	    
		/*data(optional) is what is passed from the previous view*/  
		display: function(data){
		
			if(!this.isPageLoaded){
				this.insertSidebar();
			    this.isPageLoaded = true;
			}
			
			if(this.sidebar){
				// Call to trigger the click event in the sidebar - Quote button will be selected
				this.sidebar.$("#id_dashboard_quote").trigger("click");
			}
			
			$("#retirements-pension-right-section").hide();
			$("#male-icon").addClass("selected");
			$("#rtrmt-monthly-income").html("Rs." + $("#income-after-retirement").val() + " Lakhs");
			$("#life-expectancy-yrs").html($("#life-expectancy-range").val() + " Years");
			$("#inflation-rate-yrs").html($("#inflation-rate-percent").val() + "%");
			
			if(data != undefined){
				this.prepopulateUI(data);
				$("#rpSaveQuoteBtn").attr('disabled', true).addClass('ui-disabled');
				$("#calculate-btn").hide();
				$("#retirements-pension-right-section").show();
			}
		},
		
		insertSidebar: function() {
			this.sidebar = new sidebarView();
			this.sidebar.render();

			$('#rtrmt_sidebar_container').append(this.sidebar.$el);
			$('#rtrmt_sidebar_container').trigger("create");
		},
		
		onInvokeSuccess: function(){

			//TODO: more proper formatting
			var formattedCorpus = "Rs." + this.quoteModel.get("corpusAmount") ;
			var formattedMonthly = this.quoteModel.get("monthlyPremium") ;
			var formattedQuarterly = this.quoteModel.get("quarterlyPremium") ;
			var formattedHly = this.quoteModel.get("hlyPremium") ;
			var formattedYearly = this.quoteModel.get("yearlyPremium") ;
			
			$(".retirement-premium-label-3").html(formattedCorpus);
			$("#payment-cal-lbl-4").html(formattedMonthly);
			$("#payment-cal-lbl-6").html(formattedQuarterly);
			$("#payment-cal-lbl-8").html(formattedHly);
			$("#payment-cal-lbl-10").html(formattedYearly);

			$("#retirements-pension-right-section").fadeIn(this.transitionDuration);
		},
		
		onMaleIconClick: function(){
			$("#female-icon").removeClass("selected");
			$("#male-icon").addClass("selected");
			this.quoteModel.set({gender: "male"});
		},
		
		onFemaleIconClick: function(){
			$("#female-icon").addClass("selected");
			$("#male-icon").removeClass("selected");
			this.quoteModel.set({gender: "female"});
		},
		
		onRetirementPlanYearsClick: function(){
			var slider1 = $("#age-starts").val();
			var slider2 = $("#age-ends").val();
			var rtrmtPolicyTerm = slider2 - slider1;
			$("#rtrmt-policy-term-yrs").html(" = " + rtrmtPolicyTerm + " years");
			this.quoteModel.set({policyTerm: rtrmtPolicyTerm});
		},
		
		formatNumber: function(value){
			
			var returnStr = null;
			
			if(value < 99){
				returnStr = "Rs. " + value + " Lakhs";
			}
			return returnStr;
		},
		
		onIncomeAftrRtrmtClick: function(){
			var monthlyIncome = this.formatNumber($("#income-after-retirement").val());
			$("#rtrmt-monthly-income").html(monthlyIncome);
			
		},
		
		onLifeExpectancyRangeClick: function(){
			var lifeExpectancy = $("#life-expectancy-range").val();
		    $("#life-expectancy-yrs").html(lifeExpectancy + " Years");
		    
		},
		
		onInflationRateClick: function(){
			var inflationRate = $("#inflation-rate-percent").val();
		    $("#inflation-rate-yrs").html(inflationRate + "%");
		    
		},

		
		onCalcBtnClick: function(){
		
			this.quoteModel.set({dateOfBirth: $("#rp-dob").val()});
			this.quoteModel.set({incomeAftrRtrmt: parseInt($("#income-after-retirement").val())});
			this.quoteModel.set({lifeExpectancy: parseInt($("#life-expectancy-range").val())});
			this.quoteModel.set({inflationRange: parseInt($("#inflation-rate-percent").val())});
			this.quoteModel.set({minAge: $("#age-starts").val()});
			this.quoteModel.set({maxAge: $("#age-ends").val()});

			//fetch the data from the adapter call
			
			var invocationData = {
					adapter: 'InsureAssistAdapter', 
					procedure: 'getRetirementPensionCalculation',
					parameters: [this.quoteModel.toJSON()]
				};
				
				var options = {
				};
				
				var defObj = WL.Client.invokeProcedure(invocationData,options);
				var self = this;
				
				defObj.done(function(result){
				
					var jsonObj = result.invocationResult.calculationResults[self.stubCount];
					
					//populate the local object from JSON content
					self.quoteModel.set({corpusAmount: jsonObj.calculationResult["corpusAmount"]});
					self.quoteModel.set({monthlyPremium: jsonObj.calculationResult["monthly"]});
					self.quoteModel.set({quarterlyPremium: jsonObj.calculationResult["quarterly"]});
					self.quoteModel.set({hlyPremium: jsonObj.calculationResult["halfYearly"]});
					self.quoteModel.set({yearlyPremium: jsonObj.calculationResult["yearly"]});
					//format it and display it on UI
					self.onInvokeSuccess();
					
					//this is only temp logic to get different data for each call
					if(self.stubCount < result.invocationResult.calculationResults.length){
						self.stubCount++;
					}
					else{
						self.stubCount = 0;
					}
				});
			
				defObj.fail(function(error){
					console.log("Error in call to fetch calculation results Retirement plans:", error);
				});
			//for now - we call the update function directly
				
				$("#calculate-btn").hide();
		},
		
		//TODO: add logic to prevent saving any quote more than once
		onClickSaveQuoteBtn: function(){
			
			/*TODO: fill up all values later on. filling up only needed values now*/
			var dt = new Date();
			var dtStr = dt.getDate() + "/" + dt.getMonth() + "/" + dt.getFullYear();
			this.quoteModel.set({savedDate: dtStr});
			this.quoteModel.set({annualPremium: 23450});
			this.quoteModel.set({policyType: "Retirement And Pension"});
			this.quoteModel.set({numYears: 5});
			
			/*Adding to the collection*/
			var collection = utils.getSavedQuotesCollection();
			
			if(collection){
				collection.add(this.quoteModel);
			}
			
			/*storing it in the JSON Store*/
			WL.JSONStore.get("savedQuotes").add(this.quoteModel.toJSON()).then(function(){
				console.log("Data Save in JSON Store successful");
			}, 
			function(){
				console.log("Data Save in JSON Store failed");
			});
			
			$("#rpSaveQuoteBtn").attr('disabled', true).addClass('ui-disabled');
			$("#calculate-btn").hide();
		},
		
		onChangeLeftSection: function(){
			$("#retirements-pension-right-section").fadeOut();
			$("#rpSaveQuoteBtn").removeAttr('disabled', true).removeClass('ui-disabled');
			$("#calculate-btn").show();
		},
	});
	
	return RetirementPension;
});