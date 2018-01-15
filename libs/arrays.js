
let styles = ['Jazz', 'Blues'];
styles.push('Rock and Roll');
if (styles.length % 2 === 1){
	styles[(styles.length - 1)/2] = 'Classics'; 
}
console.log(styles.shift());
styles.unshift('Rap', 'Reggae');

function askNum(){
	let answer = prompt('Digit a Number', 5);
	return answer;
}

function sumInput(){
	let wrongInput = 'There is at least an input that is NaN';
	let arr = [];
	let a = 0;
	while(!(a === null || a === '' || isNaN(a))) {
		arr.push(+a);
		a = askNum();
	}
	let sum = 0;
	for(let value of arr){
		sum += value;
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
	let arrComparison = [];
	let a = 0;
	let b = 0;
	for(i = 0; i < arr.length; i++) {
	let	j = i;
		while(j < arr.length) {
			arrComparison.push(arr[j]);
			a = sumArray(arrComparison);
			(a >= b) ? b = a : b = b;
			j++;
		}
	arrComparison = [];
	}
return b;
}

function concat(array1, array2) {
	let arrResult = [];
	function pushear(array) {
		for (let value of array) {
			arrResult.push(value);
		}
		return arrResult;
	}
	pushear(array1);
	pushear(array2);
	return arrResult;
}

function deleteEqualItemsPerArray(array1) {
	for (let i = 0; i < array1.length; i++){
		secondLoop: for (let j = 0; j < array1.length; j++) {
			if(i === j){
				continue secondLoop;
			}
			if (array1[i] === array1[j]) {
				array1.splice(j, 1);
			}
		}
	}
}

function deleteEqualItemsBetweenTwoArrays(array1, array2) {
	for (let value of array1) {
		for (let i = 0; i < array2.length; i++) {
			if (value === array2[i]) {
				array2.splice(i, 1);
			}
		}
	}
}

function checkIfIsInTheArray(array1, v1){
	let result;
	for (let value of array1) {
		if (v1 === value) {
			return true;
		}
	}
	
}

function intersection(array1, array2){
	let arrResult = [];
	for (let value of array1){
		for (let i = 0; i < array2.length; i++) {
			if (value === array2[i]){
				if (!checkIfIsInTheArray(arrResult, value)){
					arrResult.push(value);	
				}
			} 
		}
	}
	return arrResult;  
}

function union(){
	for (let i = 0; i < arguments.length; i++){
		deleteEqualItemsPerArray(arguments[i]);
		if(!(i === 0)){
			deleteEqualItemsBetweenTwoArrays(arguments[i-1], arguments[i]);
		}
	}
	return concat(arguments);

}

function printArguments() {
	 	console.log(arguments[i]); 
	
}