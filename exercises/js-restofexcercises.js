//Ex 1
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

//Ex 2
let myObject = {};
let yourObject = {
	name: 'Pedro',
	surname: 'Politi',
};
let years = 'age';
yourObject[years] = 24;


function isObjectEmpty(object){
	let i = 0;
	for(let key in object){
		i++;
	}
	return (i===0);
}


function factorial(a){
	let result = 1;
	for(let i = 2; i<=a; i++){
			result *= i;
	}
	return result;
}

let min2 = (a,b) =>{
	if(!(typeof a === typeof b)){
		a = +a;
		b = +b;
	}
	return (a<b) ? a : b;
}


let min3 = (a,b,c) => min2(min2(a,b), c);


//Ex 4

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// function sumSalaries(object){
// 	let sum = 0;
// 	for(let key in object){
// 		if ((typeof object[key]) === 'number'){
// 			sum += object[key];
// 		}
// 	}
// 	return sum;
// }


//Ex 5

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(object) {
	for(let key in object){
		if ((typeof object[key]) === 'number'){
			 object[key] *= 2;
		}
	}
	return;
}

let myBag = {};
function addFruitToBag (fruit, amount, bag) {
	bag[fruit] = (bag[fruit] || 0) + amount;
}

//Object Methods, This
//Ex 1

/*
let calculator = {
	read () {
		this.num1 = +prompt('Digit a number:', 3);
		this.num2 = +prompt('Digit a number:', 3);
	},
	sum () {
		return (this.num1 + this.num2);
	},

	mul () {
	 	return (this.num1 * this.num2);
	}
};


calculator.read();
console.log('La suma es ' + calculator.sum() );
console.log('La multiplicación es ' + calculator.mul() );
*/
//Ex 2
let ladder = {
	step: 0,
	up() {
		this.step++;
		return this;
	},
		down() {
			this.step--;
			return this;
		},
		showStep: function() { // shows the current step
  		console.log( this.step );
  		return this;
		}
};