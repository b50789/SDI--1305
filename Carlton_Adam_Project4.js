//alert("JavaScript works!");
// Adam Carlton
// Project IV
// SDI -- 1305
// Project IV (week 4)

// Start

var myLib = function () {
    
    //Phone Number Validation
    //Does a string follow a 123-456-7890 pattern like a phone number?
    var phoneNum = function(number){
	var numberCheck = isNaN(number[0,1,2,4,5,6,8,9,10,11]);
	
	if (numberCheck === false && number[3,7]=== "-"){
	    return true;
	} else {
	    return false;
	}
	
    }
    
    
    //URL String Validation
    //Is the string a URL? /(Does it start with http: or https:?/)
    var urlCheck = function(url){
	if (url.substring(0,7) === "http://" || url.substring(0,8) === "https://") {
	    return true;
	}else{
	    return false;
	}
    }
    
    
    //ABC String Separator
    //Given a string that is a list of things separated by a given string, as well as another string separator,.....
    //return a string with the first separator changed to the second: "a,b,c" + "," + "/" to "a/b/c".
   var abcSeparator = function (str,newSeparator){
	var Sep = /\W/g;
	return str.replace(Sep,newSeparator);
   }
    
    
    //Specific Number of Decimal Places
    //Format a number to use a specific number of decimal places, as for money: 2.1 to 2.10
    var numDecimal = function(numb,decimal){
	var num = numb.toFixed(decimal)
	    return num;
	
    }
    
    
    //Return the Number Value
    //Given a string version of a number such as "42", return the value as an actual Number, such as 42.
    var numbReturn = function(numbers){
	return Number(numbers);
    }
    
  
    
    
    //Title Case String
    //Title-case a string /(split into words, then uppercase the first letter of each word/)
    var firstLetter = function(change){
	var split = change.split();
	var done = "";
	for (var i = 0,
		j = split.length;
		i < j;
		i++){
	    var upperCase = split[i].replace(split[i].charAt(0),
			    (split[i].charAt0)).toUpperCase();
	    done = done.concat(upperCase + " ADAM ");
	    return done;
	}
	}
   

    
    
    
    
 
    return {
	    "phoneNum": phoneNum,
	    "urlCheck": urlCheck,
	    "abcSeparator": abcSeparator,
	    "numDecimal": numDecimal,
	    "numbReturn": numbReturn,
	    "firstLetter": firstLetter
    }
    
    
    
    
}



//Returns

var newLib = myLib();

console.log("Is this a valid phone number? " + newLib.phoneNum("123-456-7890") +"!");
console.log("Is this a valid url string? " + newLib.urlCheck("http://www.bluegrasspcrepairs.com") + "!");
console.log("a,b,c = / = " + newLib.abcSeparator("a,b,c","/") + "!");
console.log(newLib.numDecimal(2.10,2));
console.log("The returned number " + newLib.numbReturn ("42") + "!");
console.log("It is " + newLib.firstLetter ("done") + "!");

















