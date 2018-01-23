const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const shouldContinue = (str) => str !== null && isFinite(parseInt(str));


let sum = 0;

function askNumer() {
	rl.question('Digit a number: ', (ans) => {
		if (shouldContinue(ans)) {
			console.log(`You Digit: ${ans}`);
			sum += parseInt(ans);
			askNumer();
		}  else {
			console.log('Total sum: ' + sum);
			rl.close();
		}
	});
}




askNumer();