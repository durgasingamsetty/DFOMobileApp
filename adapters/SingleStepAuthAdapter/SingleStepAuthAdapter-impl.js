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
 * @param interest
 *            must be one of the following: world, africa, sport, technology, ...
 *            (The list can be found in http://edition.cnn.com/services/rss/)
 * @returns json list of items
 */
function decodeBase64(s) {
    var e={},i,b=0,c,x,l=0,a,r='',w=String.fromCharCode,L=s.length;
    var A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for(i=0;i<64;i++){e[A.charAt(i)]=i;}
    for(x=0;x<L;x++){
        c=e[s.charAt(x)];b=(b<<6)+c;l+=6;
        while(l>=8){((a=(b>>>(l-=8))&0xff)||(x<(L-2)))&&(r+=w(a));}
    }
    return r;
};

function checkCredentials(userName, password){
	var unpwdTable = [{username: "asdf", password: "qwerty"},
	      			  {username: "dfouser1", password: "pwd"},
	    			  {username: "dfouser2", password: "pwd"}];
	
	for(var idx = 0; idx < unpwdTable.length; idx++){
		if(unpwdTable[idx].username == userName){
			if(unpwdTable[idx].password == password){
				return true;
			}
		}
	}
	return false;
}

function submitAuthentication(encodedUserName, encodedPassword) {
	
	var userName = decodeBase64(encodedUserName);
	var password = decodeBase64(encodedPassword);

	//auth is successful
	if(checkCredentials(userName, password)){
		
		var userIdentity = {
			userId: userName,
			displayName: userName,
			attributes:{
			}
		};
		WL.Server.setActiveUser("SingleStepAuthRealm", userIdentity);
		
		return {authRequired: false};
	}
	else{
		return onAuthRequired(null, "Invalid login credentials");
	}
}

function onAuthRequired(headers, errorMessage){
	
	errorMessage = errorMessage? errorMessage: null;
	
	return {
		authRequired: true,
		errorMessage: errorMessage
	};
}