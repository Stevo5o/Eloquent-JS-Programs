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
	// 4.1 sum of arrange and step
	function range(start, end, step) {
		if (step == null) {
			step = 1;
		}
		var arr = [];

		if (step > 0) {
			for (var i = start; i <= end; i += step) {
				arr.push(i);
			}
		} else {
			for (var i = start; i >= end; i += step) {
				arr.push(i);
			}
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
	// 55
	console.log(range(5, 2, -1));
	// [ 5, 4, 3, 2 ]

	// 4.2 reversing an array
	function reverseArray(arr) {
		var output = [];
		for (var i = arr.length - 1; i >= 0; i--) {
			output.push(arr[i]);
		};
		return output;
	};

	// 4.2 reversing an array in place
	function reverseArrayInPlace(arr) {
		for(var i = 0; i < Math.floor(arr.length / 2); i++) {
			var old = arr[i];
			arr[i] = arr[arr.length - 1 - i];
			arr[arr.length - 1 - i] = old;
		}
		return arr;
	};

	console.log(reverseArray(["A", "B", "C"]));
	// [ 'C', 'B', 'A' ]
	var arrVal = [1, 2, 3, 4, 5, 6, 7];
	reverseArrayInPlace(arrVal);
	console.log(arrVal);
	// [ 7, 6, 5, 4, 3, 2, 1 ]

	// 4.3 a list
	function arrayToList(array) {
		var list = null;
		for (var i = array.length - 1; i >= 0; i--) {
			list = {value: array[i], rest: list}
		}
		return list;		
	};

	function listToArray(list) {
		var array = [];
		for(var node = list; node; node = node.rest) {
			array.push(node.value);
		}
		return array;
	}

	function prepend(value, list) {
		return {value: value, rest: list};
	}

	function nth(list, n) {
		if(!list) {
			return undefined;
		}
		else if (n == 0) {
			return list.value;
		}
		else {
			return nth(list.rest, n - 1)
		}
	}

	console.log(arrayToList([10, 20]));
	// { value: 10, rest: { value: 20, rest: null } }
	console.log(listToArray(arrayToList([10, 20, 30])));
	// [ 10, 20, 30 ]
	console.log(prepend(10, prepend(20, null)));
	// { value: 10, rest: { value: 20, rest: null } }
	console.log(nth(arrayToList([10, 20, 30]), 1));
	// 20
}());