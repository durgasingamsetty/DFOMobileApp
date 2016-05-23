//Loads the Client List Summary - the landing page after login and splash

define([

"jquery", "backbone", "com/models/registrationModel", "com/models/modifyFundAllocationModel" ], function($, Backbone,
		registrationModel, modifyFundAllocationModel ) {

	var Utils = Backbone.Model.extend({}, {
		language : "EN",
		isOnLine : true,
		fs : null,
		viewParams : null,
		regModel : null,
		fundModel : null,

		getLanguage : function() {
			return this.language;
		},

		getRegistrationModel : function() {

			if (!this.regModel) {
				this.regModel = new registrationModel();
			}
			return this.regModel;
		},

		
		getModifyFundAllocationModel: function(){
		 
		if(!this.fundModel){ this.fundModel = new modifyFundAllocationModel();
		}
		return this.fundModel; 
		
		},
		 

		/*
		 * logic for handling back key press - only for android device/emulator
		 * if back button is pressed twice within 3 seconds, then app closes
		 */
		// setupBackButtonHandling: function(){
		//			
		// var self = this;
		// var timerId = null;
		//            
		// $(document).on("backbutton", function(event){
		//
		// console.log("Loader create");
		// alert("Press back again to exit application");
		//            	
		// //start a timer if not already started
		// if(timerId == null){
		// timerId = setTimeout(function(){
		// $.mobile.loading('hide');
		// timerId = null;
		// }, 3000);
		// }
		// //user pressed back button before the timer expired, close the app
		// else{
		// console.log("Timer already exists");
		// $.mobile.loading('hide');
		// navigator.app.exitApp();
		// }
		// });
		// },
		//		
		// //
		// onOnline: function(){
		// this.isOnLine = true;
		//			
		// /*if MapQuest and Twitter scripts are not loaded, load them*/
		// var twjs = document.getElementById("twitter-wjs");
		// var mpjs = document.getElementById("mapquest-wjs");
		//			
		// if(!twjs){
		// this.initTwitter();
		// }
		//			
		// if(!mpjs){
		// this.initMap();
		// }
		//			
		// alert("Regained network connectivity");
		// },
		//		
		// onOffline: function(){
		// this.isOnLine = false;
		//			
		// alert("Lost network connectivity");
		// },
		//		
		// /*watching network state shall work on the device when Phonegap
		// Network information plugin
		// is installed from the CLI*/
		// watchNetworkState: function(){
		//			
		// var self = this;
		//			
		// if(window.Connection){
		// if(Connection.NONE == navigator.connection.type){
		// this.isOnLine = false;
		// }
		// }
		//			
		// window.addEventListener("online", function(event){
		// self.onOnline();
		// }, false);
		//			
		// window.addEventListener("offline", function(event){
		// self.onOffline();
		// }, false);
		// },
		//		
		// createAppDir: function(rootDirEntry, folders){
		//			
		// var self = this;
		//			
		// // Throw out './' or '/' and move on to prevent something like
		// '/foo/.//bar'.
		// if (folders[0] == '.' || folders[0] == '') {
		// folders = folders.slice(1);
		// }
		//			
		// if (folders.length > 0 && folders[0] != undefined){
		//
		// rootDirEntry.getDirectory(folders[0], {create: true},
		// function(dirEntry) {
		//					
		// // Recursively add the new subfolder (if we still have another to
		// create).
		// if (folders.length && folders[0] != undefined) {
		// self.createAppDir(dirEntry, folders.slice(1));
		// }
		//					
		// }, function(error){
		// console.error("Error creating directories:", error);
		// });
		// }
		// },
		//		
		// initFs: function(){
		//			
		// var self = this;
		//			
		// if(window.LocalFileSystem){
		//				
		// //phonegap plugin provided file system
		// window.requestFileSystem(LocalFileSystem.PERSISTENT, 1024*1024,
		// function(fs){
		// self.fs = fs;//use later
		// self.createAppDir(fs.root, self.appDir.split('/'));
		// }, function(){
		// console.log("File System not available");
		// });
		// }
		// },
		//		
		// //use the sql plugin only on device which don't support Web SQL
		// initDb: function(){
		//			
		// /*initialize the DB object*/
		// if(!this.appDb){
		//					
		// if(window.sqlitePlugin){
		// console.log("Opening SQLite plugin DB");
		// this.appDb = window.sqlitePlugin.openDatabase({name: "WMFAppDb.db"});
		// }
		// else{
		// console.log("Opening WebSql DB");
		// this.appDb = window.openDatabase('WMFAppDb', '1.0', 'WMFAPP DB', 2 *
		// 1024 * 1024);
		// }
		// }
		//			
		// /*create a table*/
		// this.appDb.transaction(function(tx) {
		//
		// // System Parameters
		// var queryStr = "CREATE TABLE IF NOT EXISTS json_data(json_str text)";
		// tx.executeSql(queryStr);
		//				
		// }, function(e){
		// console.error("ERROR: " + e.message);
		// return;
		// });
		// },
		//				
		// isOnline: function(){
		// return this.isOnLine;
		// },
		//		
		setViewParams : function(data) {
			this.viewParams = data;
		},

		getViewParams : function() {
			var params = this.viewParams;
			this.viewParams = null;
			return params;
		},
		
		setSavedQuoteCollection: function(collection){
			this.savedQuotesCollection = collection;
		},
		
		getSavedQuotesCollection: function(){
			return this.savedQuotesCollection;
		}
	//		
	// downloadImage: function(imgUrl) {
	//
	// var self = this;
	// this.blob = null;
	//			
	// var xhr = new XMLHttpRequest();
	// xhr.onreadystatechange = function(){
	// if (this.readyState == 4 && this.status == 200){
	// self.blob = this.response;
	// self.saveToFile(self.blob, imgUrl);
	// }
	// }
	// xhr.open('GET', imgUrl);
	// xhr.responseType = 'blob';
	// xhr.send();
	// },
	//		
	// saveToFile: function(blob, imgUrl){
	//			
	// var self = this;
	// var imgName = imgUrl.replace(/.*[\\\/]/, "");//"local_img.jpg";
	// var imgNameWithPath = this.appDir + '/' + imgName;
	//			
	// //async call to get a file handle
	// this.fs.root.getFile(imgNameWithPath, {create: true, exclusive: false},
	// function(fileEntry){
	//				
	// //success: we need to create a file writer to write the blob into the
	// file
	// fileEntry.createWriter(function(writer){
	//										
	// //file write is successful, we can store this detail in our local storage
	// writer.onwrite = function(evt){
	//						
	// console.log("File written");
	// self.localFileEntry = fileEntry.toURL();
	// }
	// //async file write operation
	// writer.write(blob);
	//					
	// }, function(error){
	// console.log("Error creating writer: ", error);
	// });
	//
	// }, function(error){
	// console.log("Error in getting file handle: ", error);
	//			});			
	//		},
	//		
	//		openCamera : function (onSuccess, onFail) {
	//			navigator.camera.getPicture(onSuccess, onFail,{ quality: 50,
	//			    destinationType: destinationType.FILE_URI, saveToPhotoAlbum: true });
	//		},
	//
	});
	return Utils;
});