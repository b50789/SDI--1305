//alert("JavaScript works!");
// Adam Carlton
// Project IV
// SDI -- 1305
// Project IV (week 4)

// Start

var myLib = function () {
    
    //Phone Number Validation
    var phoneNum = function(number){
	var numberCheck = isNaN(number[0,1,2,4,5,6,8,9,10,11]);
	
	if (numberCheck === false && number[3,7]=== "-"){
	    return true;
	} else {
	    return false;
	}
	
    }
    
    
    //URL String Validation
    var urlCheck = function(url){
	if (url.substring(0,7) === "http://" || url.substring(0,8) === "https://") {
	    return true;
	}else{
	    return false;
	}
    }
    
    
    
    
    return {
	    "phoneNum": phoneNum,
	    "urlCheck": urlCheck,
    }
    
    
    
    
}



//Returns

var newLib = myLib();

console.log("Is this a valid phone number? " + newLib.phoneNum("123-456-7890") +"!");
console.log("Is this a valid url string? " + newLib.urlCheck("http://www.bluegrasspcrepairs.com") + "!");





















