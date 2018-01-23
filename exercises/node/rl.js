const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function callback(answer) {
	console.log(`Thank you for your valuable feedback: ${answer}`);
}


rl.question('What do you think of Node.js? ', callback);