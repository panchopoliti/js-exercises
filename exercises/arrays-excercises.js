let styles = ['Jazz', 'Blues'];
styles.push('Rock and Roll');
if (styles.length % 2 === 1){
	styles[(styles.length - 1)/2] = 'Classics'; 
}
console.log(styles.shift());
styles.unshift('Rap', 'Reggae');


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