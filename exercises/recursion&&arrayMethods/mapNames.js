const mapNames = (namesArr) => namesArr.map( (e) => e.name );
const usersMapped = (usersArr) => usersArr.map ( (e) => {
	return {
		fullName: `${e.name} ${e.surname}`,
		id: e.id,
	}
});