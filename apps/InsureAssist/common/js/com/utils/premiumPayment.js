//This file contains the business logic pertaining to the New User Registration Page

define([
        "jquery", 
        "backbone",
        "com/collections/insureAssistLang",
        "com/views/sidebarView"
        ], function($,
        		    Backbone,
        		    insureAssistLang,
        		    sidebarView){

	var PremiumPayment = Backbone.Model.extend({},
	{
	
		/*data(optional) is what is passed from the previous view*/  
		display: function(data){
	    this.insertSidebar();
	    
		},
	
	insertSidebar: function() {
		this.sidebar = new sidebarView();
		this.sidebar.render();

		$('#pmt_sidebar_container').append(this.sidebar.$el);
		$('#pmt_sidebar_container').trigger("create");
		this.sidebar.$("#id_dashboard_home").trigger("click");
	}
		
	});
	
	return PremiumPayment;
});