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

	var TermLifePlan = Backbone.Model.extend({},
	{
		sidebar: null,
	    isPageLoaded: false,
	    transitionDuration: 1000,
	    quoteModel: new savedQuoteModel(),
	    stubCount: 0,
	    
	    prepopulateUI: function(data){
	    	
	    	this.quoteModel = data;
	    	var gender = this.quoteModel.get("gender");
	    	if(gender == "male") {
	    		$("#female-icon-trmpln").removeClass("selected");
				$("#male-icon-trmpln").addClass("selected");
	    	}
	    	else {
	    		$("#female-icon-trmpln").addClass("selected");
				$("#male-icon-trmpln").removeClass("selected");
	    	}
	    	
	    	var smoker = this.quoteModel.get("smoker");
	    	if(smoker == "smoker") {
	    		$("#smoker-icon").addClass("selected");
				$("#nonsmoker-icon").removeClass("selected");
	    	}
	    	else {
	    		$("#smoker-icon").removeClass("selected");
				$("#nonsmoker-icon").addClass("selected");
	    	}
	    	
	    	var dob = this.quoteModel.get("dateOfBirth");
	    	$("#tp-dob").val(dob);
	    	
	    	var policyTerm = this.quoteModel.get("policyTerm");
	    	$("#lifecover-upto").val(policyTerm);
	    	var minAge = this.quoteModel.get("minAge");
	    	$("#range-1a").val(minAge).slider("refresh");
	    	var maxAge = this.quoteModel.get("maxAge");
	    	$("#range-1b").val(maxAge).slider("refresh");
	    	
	    	
	    	var lifeCover = this.quoteModel.get("lifeCover");
	    	$('#slider-lifecover').val(lifeCover).slider("refresh");
	    	
			var coverAmt = this.quoteModel.get("coverAmt");
			$("#sldr-cover").val(coverAmt).slider("refresh");
			
			var premiumFrequency = this.quoteModel.get("premiumFrequency");
			$("#select-prm-frequency").val(premiumFrequency);
			$('#select-prm-frequency').selectmenu("refresh");

			var criticalIllness = this.quoteModel.get("criticalIllness");
			$("#critical-chkbox").attr('checked',criticalIllness ).checkboxradio("refresh");
			
			var accidentchkbox = this.quoteModel.get("accidentchkbox");
			$("#accident-chkbox").attr('checked',accidentchkbox ).checkboxradio("refresh");
			
			var policyTermYears = this.quoteModel.get("policyTermYears");
			$("#select-policyTerm").val(policyTermYears);
			$("#select-policyTerm").selectmenu("refresh");

			var formattedAnnualPremium = "Rs." + this.quoteModel.get("yearlyPremium");
			var formattedTerm = "Rs." + this.quoteModel.get("basicTerm");
			var formattedSumAssured = "Rs." + this.quoteModel.get("basicSum");
			var formattedPremium = "Rs." + this.quoteModel.get("basicPremium");
			var formattedCriticalTerm = "Rs." + this.quoteModel.get("criticalTerm");
			var formattedCriticalSum = "Rs." + this.quoteModel.get("criticalSum");
			var formattedCriticalPremium = "Rs." + this.quoteModel.get("criticalPremium");
			
			
			$(".termplan-premium-label-2").html(formattedAnnualPremium);
			$("#lc-term").html(formattedTerm);
			$("#lc-sum").html(formattedSumAssured);
			$("#lc-premium").html(formattedPremium);
			$("#critical-term").html(formattedCriticalTerm);
			$("#critical-sum").html(formattedCriticalSum);
			$("#critical-premium").html(formattedCriticalPremium);
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
			
			$("#male-icon-trmpln").addClass("selected");
			$("#nonsmoker-icon").addClass("selected");
			$("#term-plan-right-section").hide();
			$("#termplan-bottom-section").hide();
			$("#tp-calculate-btn").hide();
			$("#add-rider-checkbox").show();
			$("#life-cover").html("Rs." + $('#slider-lifecover').val() + " Lakhs");
			$("#cover-amt").html("Rs." + $("#sldr-cover").val() + " Lakhs");
			
			if(data != undefined){
				this.prepopulateUI(data);
				$("#tp-save-quote").attr('disabled', true).addClass('ui-disabled');
				$("#term-plan-right-section").show();
				$("#termplan-bottom-section").show();
				$("#add-rider-checkbox").hide();
			}

		},

		insertSidebar: function() {
			this.sidebar = new sidebarView();
			this.sidebar.render();

			$('#trmlp_sidebar_container').append(this.sidebar.$el);
			$('#trmlp_sidebar_container').trigger("create");
		},
		
		onInvokeSuccess: function(){

			//TODO: more proper formatting
			var formattedAnnualPremium = "Rs." + this.quoteModel.get("yearlyPremium");
			var formattedTerm = "Rs." + this.quoteModel.get("basicTerm");
			var formattedSumAssured = "Rs." + this.quoteModel.get("basicSum");
			var formattedPremium = "Rs." + this.quoteModel.get("basicPremium");
			var formattedCriticalTerm = "Rs." + this.quoteModel.get("criticalTerm");
			var formattedCriticalSum = "Rs." + this.quoteModel.get("criticalSum");
			var formattedCriticalPremium = "Rs." + this.quoteModel.get("criticalPremium");
			
			
			$(".termplan-premium-label-2").html(formattedAnnualPremium);
			$("#lc-term").html(formattedTerm);
			$("#lc-sum").html(formattedSumAssured);
			$("#lc-premium").html(formattedPremium);
			$("#critical-term").html(formattedCriticalTerm);
			$("#critical-sum").html(formattedCriticalSum);
			$("#critical-premium").html(formattedCriticalPremium);
		
			$("#retirements-pension-right-section").fadeIn(this.transitionDuration);
		},
		
		onMaleIconClick: function(){
			$("#female-icon-trmpln").removeClass("selected");
			$("#male-icon-trmpln").addClass("selected");
			this.quoteModel.set({gender: "male"});
		},
		
		onFemaleIconClick: function(){
			$("#female-icon-trmpln").addClass("selected");
			$("#male-icon-trmpln").removeClass("selected");
			this.quoteModel.set({gender: "female"});
		},
		
		onNonSmokerClick: function(){
			$("#smoker-icon").removeClass("selected");
			$("#nonsmoker-icon").addClass("selected");
			this.quoteModel.set({smoker: "nonSmoker"});
		},
		
		onSmokerClick: function(){
			$("#smoker-icon").addClass("selected");
			$("#nonsmoker-icon").removeClass("selected");
			this.quoteModel.set({smoker: "smoker"});
		},
		
		onLifeCoverUptoClick: function(){
			var slider1 = $('#range-1a').val(); 
			var slider2 = $('#range-1b').val(); 
			var policyTermYrs = slider2 - slider1;
			$("#term-yrs").html(" = " + policyTermYrs + " Years");
			this.quoteModel.set({policyTerm: policyTermYrs});
		},
		
		formatNumber: function(value){
		
			var returnStr = null;
			
			if(value < 99){
				returnStr = "Rs." + value + " Lakhs";
			}
			
			else{
				value= (value/100).toFixed(2);
				returnStr = "Rs." + value + " crores";
			}
			return returnStr;
		},
		
		onLifeCoverClick: function(){
			var lifeCoverValue = this.formatNumber($('#slider-lifecover').val());
		    $("#life-cover").html(lifeCoverValue);
		},
		
		onCoverAmtClick: function(){
			 var coverValue = this.formatNumber($("#sldr-cover").val());
			 $("#cover-amt").html(coverValue);
		},
		
		onContinueBtnClick: function(){
	
			$("#term-plan-right-section").fadeIn(this.transitionDuration);
			$("#tp-calculate-btn").hide();
			
			this.quoteModel.set({dateOfBirth: $("#tp-dob").val()});
			this.quoteModel.set({lifeCover: parseInt($('#slider-lifecover').val())});
			this.quoteModel.set({coverAmt: parseInt($("#sldr-cover").val())});
			this.quoteModel.set({premiumFrequency: $("#select-prm-frequency option:selected").val()});
			this.quoteModel.set({criticalIllness: $("#critical-chkbox").is(":checked")});
			this.quoteModel.set({accidentchkbox: $("#accident-chkbox").is(":checked")});
			this.quoteModel.set({policyTermYears: $("#select-policyTerm option:selected").val()});
			this.quoteModel.set({minAge: $("#range-1a").val()});
			this.quoteModel.set({maxAge: $('#range-1b').val()});

			var invocationData = {
					adapter: 'InsureAssistAdapter', 
					procedure: 'getTermInsuranceCalculation',
					parameters: [this.quoteModel.toJSON()]
				};
				
				var options = {
				};
				
				var defObj = WL.Client.invokeProcedure(invocationData,options);
				var self = this;
				
				defObj.done(function(result){
				
					var jsonObj = result.invocationResult.calculationResults[self.stubCount];
					
					//populate the local object from JSON content
					self.quoteModel.set({yearlyPremium: jsonObj.calculationResult["annualPremium"]});
					self.quoteModel.set({basicTerm: jsonObj.calculationResult.basicLifeCover["term"]});
					self.quoteModel.set({basicSum: jsonObj.calculationResult.basicLifeCover["sumAssured"]});
					self.quoteModel.set({basicPremium: jsonObj.calculationResult.basicLifeCover["premium"]});
					self.quoteModel.set({criticalTerm: jsonObj.calculationResult.criticalIllnessCover["term"]});
					self.quoteModel.set({criticalSum: jsonObj.calculationResult.criticalIllnessCover["sumAssured"]});
					self.quoteModel.set({criticalPremium: jsonObj.calculationResult.criticalIllnessCover["premium"]});
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
					console.log("Error in call to fetch calculation results Term Insurance plans:", error);
				});
		},
	
		onAddRiderClick: function(){
			$("#termplan-bottom-section").show();
			$("#add-rider-checkbox").hide();	
		},
		
		onSaveQuoteBtnClick: function(){
			
			var dt = new Date();
			var dtStr = dt.getDate() + "/" + dt.getMonth() + "/" + dt.getFullYear();
			this.quoteModel.set({savedDate: dtStr});
			this.quoteModel.set({annualPremium: 25450});
			this.quoteModel.set({policyType: "Term Insurance"});
			this.quoteModel.set({numYears: 25});
			
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
			
			$("#tp-save-quote").attr('disabled', true).addClass('ui-disabled');

		},
		
		onChangeTPLeftSection: function(){
			$("#term-plan-right-section").fadeOut();
			$("#tp-save-quote").removeAttr('disabled', true).removeClass('ui-disabled');
			$("#tp-calculate-btn").show();
		},

	});
	
	return TermLifePlan;
});
