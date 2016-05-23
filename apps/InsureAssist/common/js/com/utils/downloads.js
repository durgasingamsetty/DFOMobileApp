//This file contains the business logic pertaining to the Downloads Page

define([
        "jquery", 
        "backbone",
        "com/views/sidebarView"
        ], function($,
        			Backbone,
        			sidebarView){

	var Downloads = Backbone.Model.extend({},
	{/*
		sidebar: null,*/
		
		/*data(optional) is what is passed from the previous view*/  
		display: function(data){
			this.insertSidebar();
			
		},
		
		insertSidebar: function() {
			this.sidebar = new sidebarView();
			this.sidebar.render();
			
			$('#downloads_sidebar_container').append(this.sidebar.$el);
			$('#downloads_sidebar_container').trigger("create");
			// Call to trigger the click event in the sidebar - Downloads button will be selected
			this.sidebar.$("#id_dashboard_downloads").trigger("click");
		},
		
		
	});
	
	return Downloads;
});