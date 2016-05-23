//Splash View
//=============

//Includes file dependencies
define([ "jquery",
         "backbone",
         "nvd3",
         "d3"
         ], 
         function($, 
        		  Backbone,
        		  nvd3,
        		  d3){

	// Extends Backbone.View
	var PieChartView = Backbone.View.extend({

		//these views dont have a HTML template, they are rendered by the graph engine 
		id: "mu-graph",
		tagName: "div",
		
		attributes:{
			"class": "svg-graph"
		},
		
		// Initializing
		initialize: function(){
			
			//attaching Backbone View to a SVG element needs the following steps
			var xmlns = "http://www.w3.org/2000/svg";
            var svgElem = document.createElementNS (xmlns, "svg");
            //this.setElement(svgElem);
		},         

		//render the content into div of view 
		render: function(){ 
	
			var titleText = this.model.get("title");
			var chartValues = this.model.get("chartValues");
			var chart = nv.models.pieChart()
											.x(function(d) { return d.Name;})
											.y(function(d) { return d.Value;})
											.showLabels(true)
											.labelType("percent")
											.showLegend(true)
											.legendPosition("right");
			
			d3.select(this.el).append("svg").datum(chartValues).transition().duration(1200).call(chart);
			/*d3.select(".nv-legendWrap").attr("transform", "translate(260,30)");*/
			//return to enable chained calls 
			return this; 
		},
		
		events: {
		},
	});

	// Returns the View class
	return PieChartView;

});