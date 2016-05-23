//Splash View
//=============

//Includes file dependencies
define([ "jquery",
         "backbone",
         "com/collections/insureAssistLang",
         "underscoreText!retirementPensionViewTemplate",
         "com/utils/retirementPension",
         "com/utils/utils"], 
         function( $, 
        		   Backbone, 
        		   insureAssistLang,
        		   retirementPensionViewTemplate,
        		   retirementPension,
        		   utils){
	// Extends Backbone.View
	var RetirementPensionView = Backbone.View.extend({

		//initialize template 
		template:_.template(retirementPensionViewTemplate),

		attributes:{
			"data-role" : "page",
			"data-title": "RetirementPension",
			"class": "insureassist-retirementPension"

		},

		// Initializing
		initialize: function(){

			this.el.id = "retirementpension";
		},         

		//render the content into div of view 
		render: function(){ 
            
			var langCollection = eval("insureAssistLang.langBundle_" + utils.language);
			//this.el is the root element of Backbone.View. By default, it is a div.    
			//$el is cached jQuery object for the view's element. 
			//append the compiled template into view div container 
			var templ = _.template(retirementPensionViewTemplate, langCollection.retirementPensionPage);
			this.$el.html(templ);
			//this.$el.html(this.template());  
			return this; 
		},

		events: {
			"pageshow": "onPageShow",
			"click #calculate-btn": "onCalcBtnClick",
			"click #male-icon": "onMaleIconClick",
			"click #female-icon": "onFemaleIconClick",
			"change #retirement-plan-yrs": "onRetirementPlanYearsClick",
			"change input#income-after-retirement": "onIncomeAftrRtrmtClick",
			"change input#life-expectancy-range": "onLifeExpectancyRangeClick",
			"change input#inflation-rate-percent": "onInflationRateClick",
			"click #rpSaveQuoteBtn": "onClickSaveQuoteBtn",
			"click #retirements_mid_section": "onChangeLeftSection"
		},
		
		onPageShow: function(){
			var data = utils.getViewParams();
			retirementPension.display(data);
		},
		
		onCalcBtnClick: function(){
			retirementPension.onCalcBtnClick();
		},
		
		//TODO: Change the logic for gender selection
		
		onMaleIconClick: function(){
			retirementPension.onMaleIconClick();
		},
		
		onFemaleIconClick: function(){
			retirementPension.onFemaleIconClick();
		},
		
		onRetirementPlanYearsClick: function(){
			retirementPension.onRetirementPlanYearsClick(); 
		},
		
		onIncomeAftrRtrmtClick: function(){
			retirementPension.onIncomeAftrRtrmtClick(); 
		},
		
		onLifeExpectancyRangeClick: function(){
			retirementPension.onLifeExpectancyRangeClick(); 
		},
		
		onInflationRateClick: function(){
			retirementPension.onInflationRateClick(); 
		},
		
		onClickSaveQuoteBtn: function(){
			retirementPension.onClickSaveQuoteBtn();
		},
		
		onChangeLeftSection: function(){
			retirementPension.onChangeLeftSection();
		},
	});

	// Returns the View class
	return RetirementPensionView;
}); 