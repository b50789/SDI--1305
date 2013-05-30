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
	return nValue(numbers);
    }
    
    
    
   //Array Find Smallest Value
   //Find the smallest value in an array that is greater than a given number
    var smallArray = function(array,newNum){
	var len = this.length;
	if (typeof array != "function")
	throw new TypeError();
    var res = new Array();
    var thisp = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in this)
      {
        var val = this[i];
        if (array.call(thisp, val, i, this))
          res.push(val);
      }
    }
    return res;
  }
    
    
    
    
    
 
    return {
	    "phoneNum": phoneNum,
	    "urlCheck": urlCheck,
	    "abcSeparator": abcSeparator,
	    "numDecimal": numDecimal,
	    "numbReturn": numbReturn,
	    "smallArray": smallArray,
    }
    
    
    
    
}



//Returns

var newLib = myLib();

console.log("Is this a valid phone number? " + newLib.phoneNum("123-456-7890") +"!");
console.log("Is this a valid url string? " + newLib.urlCheck("http://www.bluegrasspcrepairs.com") + "!");
console.log("a,b,c = / = " + newLib.abcSeparator("a,b,c","/") + "!");
console.log(newLib.numDecimal(2.10,2));
concole.log("The returned number " + newLib.numbReturn ("42") + "!");
console.log(newLib.smallArray);
















