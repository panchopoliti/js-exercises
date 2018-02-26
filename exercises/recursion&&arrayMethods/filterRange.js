const filterRange = (arr, from, to) => arr.filter((elem) => from <= elem && elem <= to);	

function filterRangeInPlace(arr, from, to) {
	const numbersToTakeOut = []
	arr.forEach((elem, index) => {
		if (elem < from || elem > to) {
			numbersToTakeOut.push(elem)
		}
	});
	for (let i = 0; i < numbersToTakeOut.length; i++) {
		if (arr.includes(numbersToTakeOut[i])) {
			const index = arr.indexOf(numbersToTakeOut[i]);
			arr.splice(index, 1);
		}
	}
}
 
