function camelize(string) {
	const [stringArr, ...restOfArr] = string.split('-');
	const resultArr = restOfArr.map((elem) => {
		const [firstLetter, ...restOfWord] = elem.split('');
		const upperFirstLetter = firstLetter.toUpperCase();	
		return `${upperFirstLetter}${restOfWord.join('')}`;
	});
	return `${stringArr}${resultArr.join('')}`;
}