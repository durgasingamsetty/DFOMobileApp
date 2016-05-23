// Sets the require.js configuration for your application.
require.config({

	// The number of seconds to wait before giving up on loading a script.
	// Setting it to 0 disables the timeout. The default is 7 seconds.
	waitSeconds : 0,

	// 3rd party script alias names (Easier to type "jquery" than
	// "libs/jquery-1.8.2.min")
	paths : {

		// Core Libraries
		"jquery" : "../libs/jquery/jquery", // 2.0 doesn't support document
		// backbutton binding
		"jquerymobile" : "../libs/jquery.mobile/1.4.1/jquery.mobile-1.4.1.min",
		"underscore" : "../libs/underscore/underscore",
		"underscoreText" : "../libs/underscoreText/text",
		"backbone" : "../libs/backbone/backbone",
		"d3" : "../libs/d3nvd3/d3downloaded.min",
		"nvd3" : "../libs/d3nvd3/nv.d3",
		"gauge" : "../libs/d3nvd3/gauge",
		"swiper": "../libs/swiper/swiper.min",
		
		// Templates
		"landingViewTemplate" : "../pages/landing.html",
		"loginViewTemplate" : "../pages/login.html",
		"acctLoginViewTemplate" : "../pages/acctlogin.html",
		"basicRegistrationViewTemplate" : "../pages/basicRegistration.html",
		"kycRegistrationViewTemplate" : "../pages/kycRegistration.html",
		"premiumPaymentViewTemplate" : "../pages/premiumPayment.html",
		"quoteViewTemplate" : "../pages/quote.html",
		"downloadsViewTemplate" : "../pages/downloads.html",
		"dashboardViewTemplate" : "../pages/dashboard.html",
		"retirementPensionViewTemplate" : "../pages/retirementPension.html",
		"userDetailsViewTemplate" : "../pages/userDetails.html",
		"termLifePlanViewTemplate" : "../pages/termLifePlan.html",
		"termLifePlanViewTemplate" : "../pages/termLifePlan.html",
		"assetAllocationViewTemplate" : "../pages/assetAllocation.html",
		
		"sidebarViewTemplate" : "../templates/sidebar.html",
		"allocationGridViewTemplate" : "../templates/allocationgrid.html",
		"allocationPopupViewTemplate" : "../templates/allocationpopup.html",
		"quoteListItemViewTemplate": "../templates/quotelistitem.html",
		"portFolioListViewTemplate" : "../templates/portfolio.html" 
	},

	// Sets the configuration for your third party scripts that are not AMD compatible
	shim : {

		"backbone" : {
			"deps" : [ "underscore", "jquery" ],
			"exports" : "Backbone" // attaches "Backbone" to the window object
		},

		"underscore" : {
			"deps" : [ "underscoreText" ],
			"exports" : "_"
		},

		"handlebars" : {
			"exports" : "Handlebars" // attaches "Handlebars" to the window
		// object
		},

		"nvd3" : {
			"deps" : [ "d3" ],
			"exports" : "nv"
		},

		"d3" : {
			"exports" : "d3"
		},

		"gauge" : {
			"exports" : "gauge"
		}

	}

}); // require

// Includes File Dependencies
require(
		[ "jquery", "backbone", "com/routers/MobileRouter", "com/utils/utils" ],
		function($, Backbone, MobileRouter, utils) {

			// Set up the "mobileinit" handler before requiring jQuery Mobile's module
			$(document).on("mobileinit", function() {

				// initial setup to not have any transitions
				window._transition = "none";

				// Prevents all anchor click handling including the addition of active
				// button state and alternate link bluring.
				$.mobile.linkBindingEnabled = false;

				// Disabling this will prevent jQuery Mobile from handling hash changes
				$.mobile.hashListeningEnabled = false;

				$.mobile.ajaxEnabled = false;

				$.mobile.pushStateEnabled = false;

				// disable selection for any element on the page
				document.onselectstart = function() {
					return false;
				};

				// make sure scroll event fires sooner on ios
				document.addEventListener("touchmove", function() {
					$(window).trigger("scroll");
				}, false);
				document.addEventListener("scroll", function() {
					$(window).trigger("scroll");
				}, false);

				// localization setup
				// var locale = WL.App.getDeviceLocale();
				// var language = WL.App.getDeviceLanguage();
				// console.log("Device language: " + language + ", locale: " + locale);

				// using mustache/handlbar styled templating in underscore
				_.templateSettings = {
					interpolate : /\{\{(.+?)\}\}/g
				};

				// Instantiates a new Backbone.js Mobile Router
				window.router = new MobileRouter();
				// router.setDomOption("replace");

			}); //mobileinit

			/*su: As per discussions this code has been commented from here.
			 * This implementation shall now be handled in the pageshow event handler in the respective views
			 * Eventually remove this implementation from here*/

			// need to be loaded after mobileinit has been set to be able to listen for the event
			require([ 
					"jquerymobile" ],

			function() {

				console.log("JQuery Mobile loaded.");
			});
		});