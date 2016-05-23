//This file contains the business logic pertaining to the Quote Page

define([
        "jquery", 
        "backbone",
        "swiper",
        "com/views/sidebarView",
        "com/utils/utils",
        "com/models/savedQuoteModel",
        "com/collections/savedQuoteCollection",
        "com/views/quoteListItemView"
        ], function($,
        			Backbone,
        			Swiper,
        			sidebarView,
        			utils,
        			savedQuoteModel,
        			savedQuoteCollection,
        			quoteListItemView){

	var Quote = Backbone.Model.extend({},
	{
		sidebar: null,
		swiper: null,
		isPageLoaded: false,
		
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
			
			this.displaySavedQuotes();
		},
		
		//this can change everytime as user saves more quotes
		displaySavedQuotes: function(){
			
			var quoteCollection = utils.getSavedQuotesCollection();
			
			//if data has not been fetched from the JSON store yet, then fetch it
			if(!quoteCollection){
				
				var self = this;
				var collection = new savedQuoteCollection();
				utils.setSavedQuoteCollection(collection);
				var collections = {savedQuotes: collection.toJSON()};
				
				//handling only success case for now - JSON store is initialized and read all entries from the JSON Store
				WL.JSONStore.init(collections).then(function(){
					
					/*fetch from JSON store and save it in the local collection*/
					WL.JSONStore.get("savedQuotes").findAll().then(function(entries){
						
						var idx = 0;
						_.each(entries, function(){
							
							//converting from raw JSON to a backbone object
							var model = new savedQuoteModel(entries[idx].json);
							collection.add(model);
							idx++;
							
							if(idx == entries.length){
								self.createSwiperList();
							}
						});
						
					}, function(){
						console.log("Error in fetching quotes from JSON Store");
					});
				}, function(){
					console.log("Error in init of JSONStore");
				});				
			}
			else{
				//data has already been fetched from JSON store. Display the list again
				this.createSwiperList();
			}			
		},
		
		createSwiperList: function(){
			
			var quoteCollection = utils.getSavedQuotesCollection();
			var idx = 0;
			var self = this;
			//clear the previous list and free up the old swiper
			$(".swiper-wrapper").empty();
			delete this.swiper;
			this.swiper = null;
			
			quoteCollection.forEach(function(){
				
				var model = quoteCollection.at(idx);
				var swiperSlide = new quoteListItemView({model: model});
				swiperSlide.render();
				$(".swiper-wrapper").append(swiperSlide.$el);
				swiperSlide.$el.trigger("create");
				idx++;
				
				if(idx == quoteCollection.length){
					
					self.swiper = new Swiper('.swiper-container',{
												// Optional parameters
												loop: false,
												// If we need pagination
												pagination:'.swiper-pagination',
												paginationClickable: true,
												slidesPerView: 2
											});					
				}
			});
		},
		
		insertSidebar: function() {
			this.sidebar = new sidebarView();
			this.sidebar.render();
			
			$('#quote_sidebar_container').append(this.sidebar.$el);
			$('#quote_sidebar_container').trigger("create");
			
		},
		
	});
	
	return Quote;
});

