function sortInTheReverseOrder(arr, a, b) {
	return arr.reverse(arr.sort( (a, b) => a - b ));
	if (a < b) {
		return -1;
	} else if (a === b) {
		return 0;
	} else {
		return 1;
	}
}

const copySorted = (arr) => arr.sort().slice();
