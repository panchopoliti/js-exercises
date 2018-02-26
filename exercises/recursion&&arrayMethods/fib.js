let arrResult = [0];

function fib(number) {
	if (arrResult.length > 1) {
		arrResult = [0];
	}  
	if (number === 1) {
		arrResult.push(1);
		return 1;
	} else {
		const prev = fib(number - 1);
		arrResult.push(arrResult[number - 2] + prev);
		return arrResult[number];
	}
}