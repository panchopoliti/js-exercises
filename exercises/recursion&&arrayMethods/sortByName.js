const sortByName = (arr) => arr.map((e) => e.name).sort();

function getAverage(arr) {
	const arrToAverage = arr.map( (e) => e.age);
	return arrToAverage.reduce((acum, e) => acum + e, 0) / arrToAverage.length;
} 

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function shuffle(arr) {
	const arrResult = [];
	while (arrResult.length !== arr.length) {
		const nextIndex = getRandomInt(arr.length);
		if(!arrResult.includes(arr[nextIndex])) {
			arrResult.push(arr[nextIndex]);
		}
	}
	return arrResult;
}