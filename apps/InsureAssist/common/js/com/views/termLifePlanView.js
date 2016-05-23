//Includes file dependencies
define([ "jquery",
         "backbone",
         "com/collections/insureAssistLang",
         "underscoreText!termLifePlanViewTemplate",
         "com/utils/utils",
         "com/utils/termLifePlan"], 
         function( $, 
        		   Backbone, 
        		   insureAssistLang,
        		   termLifePlanViewTemplate,
        		   utils,
        		   termLifePlan){

	// Extends Backbone.View
	var TermLifePlanView = Backbone.View.extend({

		//initialize template 
		template:_.template(termLifePlanViewTemplate),

		attributes:{
			"data-role" : "page",
			"data-title": "TermLifePlan",
			"class": "insureassist-termLifePlan"
				
		},
		
		// Initializing
		initialize: function(){

			this.el.id = "termlifeplan";
		},         

	
		render: function(){ 
			var langCollection = eval("insureAssistLang.langBundle_" + utils.language);
			var templ = _.template(termLifePlanViewTemplate, langCollection.termLifePlanPage);
			this.$el.html(templ);
			return this; 
		},
		
		events: {
			"pageshow": "onPageShow",
			"click #tp-calculate-btn": "onContinueBtnClick",
			"click #male-icon-trmpln": "onMaleIconClick",
			"click #female-icon-trmpln": "onFemaleIconClick",
			"click #smoker-icon": "onSmokerClick",
			"click #nonsmoker-icon": "onNonSmokerClick",
			"change #lifecover-upto": "onLifeCoverUptoClick",
			"change input#slider-lifecover": "onLifeCoverClick",
			"change input#sldr-cover": "onCoverAmtClick",
			"change input#riderChkbox": "onAddRiderClick",
			"click #tp-save-quote": "onSaveQuoteBtnClick",
			"click #termplan_mid_section": "onChangeTPLeftSection",
			//"change #lifecover-upto": "onLifeCoverUptoClick"
			/*"click #select-prm-frquency": "onChangeFrequency",*/
		},
		
		onPageShow: function(){
			var data = utils.getViewParams();
			termLifePlan.display(data);
		},
		
		onContinueBtnClick: function(){
			termLifePlan.onContinueBtnClick();
		},
		
		onMaleIconClick: function(){
			termLifePlan.onMaleIconClick();
		},
		
		onFemaleIconClick: function(){
			termLifePlan.onFemaleIconClick();
		},
		
		onNonSmokerClick: function(){
			termLifePlan.onNonSmokerClick();
		},
		
		onSmokerClick: function(){
			termLifePlan.onSmokerClick();
		},
		
		onLifeCoverUptoClick: function(){
			termLifePlan.onLifeCoverUptoClick();
		},
		
		onLifeCoverClick: function(){
			termLifePlan.onLifeCoverClick();
		},
		
		onCoverAmtClick: function(){
			termLifePlan.onCoverAmtClick();
		},
		
		onAddRiderClick: function(){
			termLifePlan.onAddRiderClick();
		},
		
		onSaveQuoteBtnClick: function(){
			termLifePlan.onSaveQuoteBtnClick();
		},
		
		onChangeTPLeftSection: function(){
			termLifePlan.onChangeTPLeftSection();
		},
		
		onChangeFrequency: function(){
			termLifePlan.onChangeFrequency();
		},
	});

	// Returns the View class
	return TermLifePlanView;

});
