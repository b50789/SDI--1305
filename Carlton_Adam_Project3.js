//alert("JavaScript works!");
// Adam Carlton
// Project III
// SDI -- 1305
// Project III (week 3)

// Start


// Global Variables
var myName = "Adam";
var myLife = 3; // My family, Full Sail and My Job!
var myFamily = [" My Wife-Ashley ", " My Oldest-Brian ", " My Middle-Ty ", " My Daughter-Grace ", " My Mother-Kandy"]
var timeWithFamily = [60, 45, 45, 60, 30]
var freeTime = true;

console.log("My name is " + myName + ", it is " + freeTime + " I like to spend time with my family.");
console.log("My family is my favorite part of life, " + myFamily + ".");
console.log("I have about " + myLife + " different things going on in my life.");


// JSON Data
var tSpent = {
    "myPeeps": {
        "peep1": {
            "name": "Ashley",
            "console": "Wife"
        },
        "peep2": {
            "name": "Brian-Austin",
            "console": "Oldest Son"
        },
        "peep3": {
            "name": "Ty",
            "console": "Son"
        },
        "peep4": {
            "name": "Gracey",
            "console": "Daughter"
        }
    }
};

console.log( tSpent.myPeeps );

// Method Procedure

var timeSpent = function(freeTime){
	if (freeTime > 1){
		console.log("I have about " + freeTime + " hours to spend with them before I do my schoolwork.");
	}else {
		console.log("I dont have time to spend with them today")
	}
	
};

timeSpent(4);


//Boolean Function
console.log("Before I start spending time with the family I need to goto work.");

var myWork = function(workFromHome, call){
	if(workFromHome + call > 0) {
		var noCalls = true
		return noCalls;
	} else {
		var calls = false
		return calls;
	}
};

var iWork = myWork(4, 1 );

console.log("It is " + iWork + " that I work from home, I take remote technical support calls for a living.");


// Number Function with Accessor
var callsTaken = {
    connection: function(calls){
	while (calls < 10) {
		console.log(calls + " calls taken.");
		calls++;
	}
	return calls;
    }
};

console.log(callsTaken.connection(0) + " calls taken. Now I can spend time with my family!");

// String Functions

var familyToSpend = function(oneMember, orThisMember){
	var wife = (" is my best friend, ");
	var member = (" is who I really love spending time with.")
	return oneMember + wife + " but" + orThisMember + member;
};

var choose = familyToSpend("My Wife", " the Children");
console.log(choose);
console.log("I will spend time with the oldest child first then spend time with my wife.");

// Array Function

var playWithKids = function(games, playtime){
	for (var gameNumber = 0; gameNumber < games.length; gameNumber++){
		var iSpent = games;
		var kidsName = games[gameNumber];
			minsSpent = playtime[gameNumber];
			console.log("I started palying " + kidsName + "for" + minsSpent + "minutes.");
			for (var minutes = 0; minutes < minsSpent; minutes+= 15){
			var minsLeft = minsSpent - minutes;
			console.log(minutes + "spent with, " + minsLeft + "left.");
		}
			console.log("I'm done playing with " + kidsName + ".");
			return iSpent;
	}
};

var weHadFun = playWithKids(myFamily, timeWithFamily);
console.log("I spent time " + weHadFun + " until I was done.");






























