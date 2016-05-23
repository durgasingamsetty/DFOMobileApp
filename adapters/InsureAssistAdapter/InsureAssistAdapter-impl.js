/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 *  WL.Server.invokeHttp(parameters) accepts the following json object as an argument:
 *  
 *  {
 *  	// Mandatory 
 *  	method : 'get' , 'post', 'delete' , 'put' or 'head' 
 *  	path: value,
 *
 *  	// Optional
 *  	returnedContentType: any known mime-type or one of "json", "css", "csv", "plain", "xml", "html"
 *  	returnedContentEncoding : 'encoding',
 *  	parameters: {name1: value1, ... },
 *  	headers: {name1: value1, ... },
 *  	cookies: {name1: value1, ... },
 *  	body: {
 *  		contentType: 'text/xml; charset=utf-8' or similar value,
 *  		content: stringValue
 *  	},
 *  	transformation: {
 *  		type: 'default', or 'xslFile',
 *  		xslFile: fileName
 *  	}
 *  }
 */

/**
 * @param tag
 *            must be either MobileFirst_Platform or MobileFirst_Playground
 * @returns json list of items
 */
function getAdvisors() {
	
	//	When we have real insurance server, just change the URL
	var path = "InsureAssist/apps/services/preview/InsureAssist/common/0/default/json/advisors.json";
		
	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : path,
	};
	
	return WL.Server.invokeHttp(input);
}

function getPortfolioDetails() {
	
	//	When we have real insurance server, just change the URL
	var path = "InsureAssist/apps/services/preview/InsureAssist/common/0/default/json/myportfolio.json";
		
	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : path,
	};
	
	return WL.Server.invokeHttp(input);
}

function getApplicationStatus() {
	
	//	When we have real insurance server, just change the URL
	var path = "InsureAssist/apps/services/preview/InsureAssist/common/0/default/json/appstatus.json";
		
	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : path,
	};
	
	return WL.Server.invokeHttp(input);
}

function getPremiumSummary() {
	
	//	When we have real insurance server, just change the URL
	var path = "InsureAssist/apps/services/preview/InsureAssist/common/0/default/json/premiumsummary.json";
		
	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : path,
	};
	
	return WL.Server.invokeHttp(input);
}

function getAssetFundAllocation() {
	
	//	When we have real insurance server, just change the URL
	var path = "InsureAssist/apps/services/preview/InsureAssist/common/0/default/json/assetfundallocation.json";
		
	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : path,
	};
	
	return WL.Server.invokeHttp(input);
}

function getFundAllocationSummary() {
	
	//	When we have real insurance server, just change the URL
	var path = "InsureAssist/apps/services/preview/InsureAssist/common/0/default/json/totalfundallocation.json";
		
	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : path,
	};
	
	return WL.Server.invokeHttp(input);
}


function modifyFundAllocation(fundDetails) {
	
	var path = "InsureAssist/apps/services/preview/InsureAssist/common/0/default/json/modifiedfunds.json";
		
	var input = {
	    method : 'post',
	    returnedContentType : 'json',
	    path : path,
	    parameters: fundDetails
	};
	
	return WL.Server.invokeHttp(input);
}

//TODO: pass the actual parameters in the service call when integrating with insurance ESB
function getRetirementPensionCalculation(calculationParameters){
	
	var path = "InsureAssist/apps/services/preview/InsureAssist/common/0/default/json/rpcalculations.json";
	
	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : path,
	    parameters: null
	};
	
	return WL.Server.invokeHttp(input);
}

//TODO: pass the actual parameters in the service call when integrating with insurance ESB
function getTermInsuranceCalculation(calculationParameters){
	
	var path = "InsureAssist/apps/services/preview/InsureAssist/common/0/default/json/tpcalculations.json";
	
	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : path,
	    parameters: null
	};
	
	return WL.Server.invokeHttp(input);	
}