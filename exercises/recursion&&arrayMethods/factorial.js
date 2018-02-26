function factorial(number) {
	if (number === 1) {
		return 1;
	} else {
		return number * factorial(number -1);
	}
}

function sumTo(num) {
	if (num === 1) {
		return 1;
	} else {
		return num + sumTo(num - 1);
	}
}