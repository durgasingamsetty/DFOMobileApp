//This file contains the business logic pertaining to the termInsurance Page

define([
        "jquery", 
        "backbone",
        "com/collections/insureAssistLang",
        "com/views/sidebarView"
        ], function($,
        		    Backbone,
        		    insureAssistLang,
        		    sidebarView){

	var UserDetails = Backbone.Model.extend({},
	{
	
		/*data(optional) is what is passed from the previous view*/  
		display: function(data){
	    this.insertSidebar();
	    
		},
	
	insertSidebar: function() {
		this.sidebar = new sidebarView();
		this.sidebar.render();

		$('#tmins_sidebar_container').append(this.sidebar.$el);
		$('#tmins_sidebar_container').trigger("create");
		this.sidebar.$("#id_dashboard_quote").trigger("click");
	},
		
	onContinueBtnClick: function(){
		history.back();
	} 
		
	});
	
	
	return UserDetails;
});