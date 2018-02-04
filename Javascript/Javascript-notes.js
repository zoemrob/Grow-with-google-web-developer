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