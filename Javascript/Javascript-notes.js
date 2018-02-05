/*
javascript falsy values:
bool false
value null
value undefined
number 0
empty string ''
Nan
*/

if(variable === true) is the same as if(variable);
if(variable === false) is the same as if(!variable);

// ternary operataor:
conditional ? (if condition is true) : (if conditional is false);

// switch statements:
var option = 3;

switch (option) {
	case 1:
		console.log('You selected option 1\.')
	case 2:
		console.log('You selected option 2\.')
	case 3:
		console.log('You selected option 3\.')
	case 4:
		console.log('You selected option 4\.')
	case 5:
		console.log('You selected option 5\.')
}
// falling through behavior means that if option = 3, case 3, 4, and 5 would run.
// the code effectively 'jumps' to that case.
// the 'break' keyword stops the case.

switch (option) {
	case 1:
		console.log('You selected option 1\.')
	case 2:
		console.log('You selected option 2\.')
	case 3:
		console.log('You selected option 3\.')
		break;
	case 4:
		console.log('You selected option 4\.')
	case 5:
		console.log('You selected option 5\.')
}
//returns 'You selected option 3.'

// to print out the average salary with commas (i.e. 59,124), 
// use the toLocalString() method and pass it the locale 'en-US'. 
// For example, salary.toLocaleString('en-US').

var x = 0;
x++; //returns 0, increments x
++x; //increments x, returns 1

// Function Declaration
function catSays(max) {
	var catMessage = "";
  	for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
}
/* 
	Function Declarations are hoisted (pulled by the JavaScript interpreter to the top of the code at runtime)
*/


// Anonymous Function Expression

var catSays = function(max) {
	var catMessage = "";
	for (var i = 0; i < max; i++) {
		catMessage += "meow ";
	}
  	return catMessage;
};

// call with catSays(arg)
// Function Expressions are NOT hoisted. The variable declaration is hoisted, but
// until the variable assignment is reached at runtime, the expression will not be loaded.

// Named Function Expression

var catSays = function meow(max) {
	var catMessage = "";
  	for (var i = 0; i < max; i++) {
    	catMessage += "meow ";
  	}
    return catMessage;
}

// you still call the function by catSays(arg);

// Function expression that assigns the function displayFavorite 
// to the variable favoriteMovie
var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");

// IS THE SAME AS INLINE FUNCTION:

function movies(messageFunction, name) {
	messageFunction(name);
}
// displayFavorite is declared as an inline function and passed as an argument to movies();
movies(function displayFavorite(movieName) {
	console.log('My favorite movie is ' + movieName);
}, 'Finding Nemo');

// returns 'My favorite movie is Finding Nemo'
// this is typically used when you are just going to be using the function one time.

/* 
	Awesome idea: usin the hoisting/function expression in a class. So define the class
	with an abstract class, extend the class, and have the `constructor` evaluate a conditional statement, 
	and if it is true: assign the inherited abstract or interface method one function expression,
	if it is false: assign the inherited abstract or interface method another function expression.
	
*/