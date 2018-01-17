
let styles = ['Jazz', 'Blues'];
styles.push('Rock and Roll');
if (styles.length % 2 === 1){
	styles[(styles.length - 1)/2] = 'Classics'; 
}
console.log(styles.shift());
styles.unshift('Rap', 'Reggae');

const askNum = () => prompt('Digit a Number', 5);
const shouldContinue = (str) => str !== null && isFinite(parseInt(str));

function sumInput(){
	let a;
	let sum = 0;

	while(shouldContinue(a = askNum())) {
		sum += a;
	}
	
	return sum;
}

//Considering that every input is a number type
function sumArray(arr) {
	let sum = 0;
	for(let value of arr) {
		sum += value;
	}
	return sum;
}

function getMaxSubSum(arr) {
	let maxSubSum = 0;
	for(let i = 0; i < arr.length; i++) {
		let sumFixedStart = 0;
		for(let j = i; j < arr.length; j++) {
			sumFixedStart += arr[j];
			if (sumFixedStart >= maxSubSum) {
				maxSubSum = currSum;
			}
		}
	}
	return maxSubSum;
}

//EJERCITACIÓN SANTI
function concat() {
	let arrResult = [];

	for(let arr of arguments){
		for (let elem of arr) {
			arrResult.push(elem);
		}
	}
	return arrResult;
}



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

const myUsers = [
	{name: 'pancho', age: 22, isAdmin: true},
	{name: 'sant i', age: 32, isAdmin: false},
];

const adminUsers = filter(myUsers, u => u.isAdmin);

function matrixSum(arr){
	result = 0;
	for(let a of arr){
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
	sumResult = 0;
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
		return [];
	}

	for(let a of arr){
		arrResult.push(fn(a));
	}
	return arrResult;
}

