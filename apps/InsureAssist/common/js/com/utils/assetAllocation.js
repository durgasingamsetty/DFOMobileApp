//This file contains the business logic pertaining to the Downloads Page

define([
        "jquery", 
        "backbone",
        "d3",
        "com/models/pieChartDataModel",
        "com/views/pieChartView", 
        "com/views/sidebarView",
        "com/models/allocationModel",
        "com/collections/allocationCollection",
        "com/views/allocationGridView",
        "com/views/allocationPopupView",
        "com/utils/validateForm",
        ], function($,
        			Backbone,
        			d3,
        			pieChartDataModel,
        			pieChartView,
        			sidebarView,
        			allocationModel,
        			allocationCollection,      			
        			allocationGridView,
        			allocationPopupView,
        			validateForm){

	var AssetAllocation = Backbone.Model.extend({},
	{
		sidebar: null,
		isPageLoaded: false,
		
		assetCollection: new allocationCollection(),
		
		/*data(optional) is what is passed from the previous view*/  
		display: function(data){
			
			if(!this.isPageLoaded){
				this.insertSidebar();
				this.getUserFundAllocation();	
				this.isPageLoaded = true;	
			}
			//this.getUserTotalFundAllocation();
			
			if (this.sidebar) {
				// Call to trigger the click event in the sidebar - Home button will be selected
				this.sidebar.$("#id_dashboard_home").trigger("click");
			}
			
		},
		
		onClickModify: function(){
		
			this.addPopUpListItems();
			$('#modify-popup').popup({
				dismissible:true
			});
			$('#modify-popup').trigger("create");
			$('#modify-popup').popup('open');
		},
		
		openPopupModify: function(){
			var xPos = $(document).width()/2;
			var yPos = $(document).height()/2;
			
		},

		insertSidebar: function() {
			this.sidebar = new sidebarView();
			this.sidebar.render();

			$('#assetallocation_sidebar_container').append(this.sidebar.$el);
			$('#assetallocation_sidebar_container').trigger("create");
		},
		
		drawGrid: function(){
			
			for(var idx = 0; idx < this.assetCollection.length; idx++){
				
				var allModel = this.assetCollection.at(idx);
				var allocView = new allocationGridView({model: allModel});
				allocView.render();
				$("#data-list").append(allocView.$el);
				allocView.$el.trigger("create");
				
				if(idx == this.assetCollection.length){
					$("#data-list").listview();
					$("#data-list").listview("refresh");
				}
				$("#asset-allocation-scrollid").trigger("create");
			}
		},
		
		drawPieChart : function() {	
			
			var data = new Array();

			for(var idx = 0; idx < this.assetCollection.length; idx++){
				var tmpVar = {"Name": this.assetCollection.at(idx).get("fundName"),
							  /*TODO: calculate the percentages dynamically*/
						  	  "Value": parseInt(this.assetCollection.at(idx).get("fundAllocatedPercent"))};
				data.push(tmpVar);
			}
			
			var chart = nv.models.pieChart()
											.x(function(d) { return d.Name;})
											.y(function(d) { return d.Value;})
											.showLabels(true)
											.labelType("percent")
											.showLegend(true)
											.legendPosition("right");

			d3.select("#asset-piechart").append("svg").datum(data).transition().duration(500).call(chart);
		},
		
		addPopUpListItems: function(){

			$("#popup-data").empty();
			var allocPercentage = 0;

			for(var idx = 0; idx < this.assetCollection.length; idx++){

				var allModel = this.assetCollection.at(idx);
				allocPercentage += parseInt(allModel.get("fundAllocatedPercent"));
				var allocView = new allocationPopupView({model: allModel});
				allocView.render();
				$("#popup-data").append(allocView.$el);
				allocView.$el.trigger("create");

				if(idx == this.assetCollection.length){
					$("#popup-data").listview();
					$("#popup-data").listview("refresh");
					$("#modify-popup").popup();
					$("#modify-popup").popup("refresh");
				}
			}
			$("#asset-alloc-lbl-2f").html(allocPercentage + "%");
			$("#modify-total-fund-lbl").html("Total Allocation "+allocPercentage + "%");
		},
		
		onInputValueChange: function(){
			
			var elms = $(".modify-span");
			var allocPercentage = 0;
			for (var idx = 0; idx < elms.length; idx++){
				
				allocPercentage += parseInt(elms[idx].value);
			}
			
			if(allocPercentage == 100){
				$("#modify-total-fund-lbl").removeClass("total-fund-highlight");
			}
			/*else
				$("#modify-total-fund-lbl").addClass("total-fund-highlight");*/
			
			$("#modify-total-fund-lbl").html("Total Allocation "+allocPercentage + "%");
			
		},
		//starting of InsureAssistAdapter- Fetching the asset fund allocation details for each user
		onGetUserFundAllocationSuccess : function(result) {

			var fetchedFundAllocation = result.invocationResult.fundAllocation;

			for(var idx = 0; idx < fetchedFundAllocation.length; idx++){

				var model = new allocationModel(fetchedFundAllocation[idx].fund);
				this.assetCollection.add(model);
			}
			//populate the UI
			this.drawGrid();
			this.drawPieChart();
			//this.addPopUpListItems();
		},

		onGetUserFundAllocationFailure : function(result) {
			console.log("Fetching user asset fund allocation details failed");
		},

		getUserFundAllocation : function() {
			
			var invocationData = {
				adapter : 'InsureAssistAdapter',
				procedure : 'getAssetFundAllocation',
				parameters : []
			};

			var options = {
				
			};
			var defObj = WL.Client.invokeProcedure(invocationData, options);
			var self = this;
			
			defObj.done(function(result){
				self.onGetUserFundAllocationSuccess(result);
			});
			
			defObj.fail(function(result){
				self.onGetUserFundAllocationFailure(result);
			});
		},

		//end of InsureAssistAdapter- Fetching the asset fund allocation details for each user
		//starting of InsureAssistAdapter- Fetching the total fund allocation details for each user
		getUserTotalFundAllocation : function() {
			
			var invocationData = {
				adapter : 'InsureAssistAdapter',
				procedure : 'getFundAllocationSummary',
				parameters : []
			};

			var options = {
			};

			
		},

		//end of InsureAssistAdapter- Fetching the total fund allocation details for each user
		
		//starting of InsureAssistAdapter- 
		
		
		setAssetAllocation: function(model){

			var value = $("#id-modify-text1").val();
			model.set({fundAllocatedPercent1: value});

			var value = $("#id-modify-text2").val();
			model.set({fundAllocatedPercent2: value});
			
			var value = $("#id-modify-text3").val();
			model.set({fundAllocatedPercent3: value});

			var value = $("#id-modify-text4").val();
			model.set({fundAllocatedPercent4: value});
			
			var value = $("#id-modify-text5").val();
			model.set({fundAllocatedPercent5: value});
			
			return true;
		},
		
		onUserAssetAllocationSuccess: function(result){
			console.log("User asset allocation modification successful. Result is: ", result);
		},
		
		onUserAssetAllocationFailure: function(result){
			console.log("User asset allocation modification failed");
		},
		
		onPopupCancelClick: function(){
			
			$("#modify-popup").popup("close");
		},
		
		submitAssetAllocation: function(model){
			
			//we check that all mandatory fields are filled. Then we post this to the adapter
			if(validateForm.validateFundAllocation(model)){

			//	var jsonStr = JSON.stringify(model);
				var invocationData = {
					adapter: 'InsureAssistAdapter', 
					procedure: 'modifyFundAllocation',
					parameters: [model.toJSON()]
				};
				
				var options = {
					onSuccess : this.onUserAssetAllocationSuccess, onFailure : this.onUserAssetAllocationFailure
				};
				
				WL.Client.invokeProcedure(invocationData,options);
				$("#modify-popup").popup("close");
				return true;
			}
			return false;
		}
	});
	
return AssetAllocation;
});