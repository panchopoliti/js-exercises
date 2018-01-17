function sumSalaries(salaries){
	const a = Object.values(salaries);
	let result = 0;
	for (let b of a) {
		result += b;
	}
	return result;
}

function count(obj) {
	return Object.keys(obj).length;
}

