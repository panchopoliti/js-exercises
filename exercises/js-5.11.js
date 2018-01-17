

let test = {
  name: "John Smith",
  age: 35,
  sayHi() {
  	return 'hi!';
  }
};

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let serializedJSON = JSON.stringify(test);
let parsedJSON = JSON.parse(serializedJSON);

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

let a = JSON.stringify(meetup, function replacer(key, value) {
 	return (key === 'occupiedBy' || key === 'self') ? undefined : value;
}, 2);
let b = JSON.stringify(room, function replacer(key, value){
	return (key === 'self' || key === 'place') ? undefined : value;
}, 2)