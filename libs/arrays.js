/**
* Concatenates arrays
* @param {Arrays} arrays - the arrays to be concatenated
* @return {Array} the resulting array of doing the concatenation
*/
function concat() {
	let arrResult = [];

	for(let arr of arguments){
		for (let elem of arr) {
			arrResult.push(elem);
		}
	}
	return arrResult;
}


/**
* Delete duplicate elements from an array
* @param {Array} array - the array to remove duplicates 
* @return {Array} a new array containing unique elements
*/
function deleteDuplicates(array) {
	const result = [];

	for (let elem of array) {
		if (indexOf(result, elem) === -1) {
			result.push(elem);
		}
	}

	return result;
}

function intersectionBetweenTwoArr(array1, array2){
	let arrResult = [];

	for(let a of array1){
		for (let b of array2){
			if(a === b) {
				arrResult.push(a);
			}
		}
	}
	return deleteDuplicates(arrResult);
}

function intersection(){
 	let arrResult = arguments[0];
	for(let currArr of arguments){
		arrResult = intersectionBetweenTwoArr(arrResult, currArr);
	}
	return arrResult;
}

function union() {
	let arrResult = [];

	for (let currArr of arguments) {
		arrResult = concat(arrResult, currArr);
	}

	return deleteDuplicates(arrResult);
}

function indexOf(arr, elem) {
	for(let i = 0; i < arr.length; i++){
		if(elem === arr[i]) {
			return i;
		}
	}
	return -1;
}

function filter(arr, fn){
	let arrResult = [];

	if (typeof fn !== 'function') {
		return [];
	}

	for(let a of arr){
		if(fn(a)){
			arrResult.push(a);
		}
	}

	return arrResult;
}

function matrixSum(arr){
	let result = 0;
	for(let a of arr) {
		for(let b of a){
			result += b;
		}
	}
	return result;
}

function squareMatrix(arr){
	for(let a of arr){
		if(arr.length !== a.length){
			return false;
		}
	}
	return true;
}

function diagonalMatrix(arr){
	let sumResult = 0;
	if(!squareMatrix(arr)){
		return -1;
	}
	for(let i = 0; i < arr.length; i++) {
		sumResult += arr[i][i];
	}
	return sumResult;
}

function map(arr, fn){
	let arrResult = [];

	if (typeof fn !== 'function') {
		return arr;
	}

	for(let a of arr){
		arrResult.push(fn(a));
	}
	return arrResult;
}

function head(arr) {
	return arr[0];
}

function tail(arr) {
	let arrResult = [];
	for (let i = 1; i < arr.length ; i++){
		arrResult.push(arr[i]);
	}
	return arrResult;
}

/**
* Reduces the array to a single value
* @param {Array} arr - the array to reduce
* @param {Function} fn - the function which will set the condition of reduction
* @param {Number} init - The accumulator initial value
* @return {Any} A single value 
*/
function reduceArray(arr, fn, init = 0){
	if (typeof arr !== 'array') {
		return arr;
	}

	if (typeof fn !== 'function') {
		return arr;
	}

	if (typeof init !== 'number') {
		return arr;
	}
	for (let elem of arr){
		let result = fn(acum, elem);
	}
	return result;
}

