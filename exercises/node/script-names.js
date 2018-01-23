const fs = require('fs');

if (process.argv.length !== 3){
	throw new Error('Invalid amount of Arguments');
}

const file = 'SELECT_t___FROM_public_organization_play.csv';

const fileToString = fs.readFileSync(file).toString();
const splitBreakLine = fileToString.split('\n');

const splitComma = [];
for(i = 0; i < splitBreakLine.length ; i++) {
	splitComma.push(splitBreakLine[i].split(',')); 
}


// What to do in case of an equality?
function generateNameOcurrences() {	
	let ocurrences = {};

	for(let i = 0; i < splitComma.length; i++) {
		if( splitComma[i][1] === '' || !isNaN(parseInt(splitComma[i][1])) || splitComma[i][1] === undefined ) {
			continue;
		}
		let nameToCount = splitComma[i][1].toLowerCase();

		if (!ocurrences[nameToCount]) {
			ocurrences[nameToCount] = 1;
		} else {
			ocurrences[nameToCount] += 1;
		}
	}
	return ocurrences;
}

let ocurrences = generateNameOcurrences();

function showTheMostRepeatedName() {
	let max = 0;
	let result;
	for (let key in ocurrences) {
		let evaluation = ocurrences[key];

		if(evaluation > max) {
			max = evaluation;
			result = `${key}: ${ocurrences[key]}`;
		}
	}
	return result;
}

console.log('El ganador es: ' + showTheMostRepeatedName());





