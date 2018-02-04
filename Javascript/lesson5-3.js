/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(base) {
	var triangle = '';
	for (let i = 1; i <= base; i++) {
		triangle += makeLine(i);
	}
	return triangle;
}
/*
	1. declare variable triangle, assign it empty value.
	2. set a for loop, i set to 1 (because the first line needs to be one star)
	3. if i is less than or equal to the size of the triangle base, continue
	4. add a line to triangle
	5. increment i
	6. return triangle with multiple lines
*/

// test your code by uncommenting the following line
console.log(buildTriangle(10));

/* 
	returns:
	
	* 
	* * 
	* * * 
	* * * * 
	* * * * * 
	* * * * * * 
	* * * * * * * 
	* * * * * * * * 
	* * * * * * * * * 
	* * * * * * * * * * 
	
*/