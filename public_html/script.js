/**
 * script.js
 * @ Stephen O'Connor, March 2015
 *
 * Dependencies: node.js
 *
 */


// Eloquent JS
// Chapter 4 Data Structures: Objects and Arrays

(function() {

	// exercises
	// 4.1 sum of arrange
	function range(start, end) {

		var arr = [];

		for (var i = start; i <= end; i++) {
			arr.push(i);
		}
		return arr;
	};

	function sum(arr) {
		var total = 0;		

		for (var i = 0; i < arr.length; i++) {
			total += arr[i];
		}
		return total;
	};	
	console.log(sum(range(1, 10)));
}());
