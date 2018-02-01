function equalObjects(obj1, obj2) {
	if (obj1.length !== obj2.length) {
		return false;
	}

	for (let key1 in obj1) {
		for (let key2 in obj2) {

			if (key1 in obj2) {
				return false;
			}
		}
		if (obj1[i] !== obj2[i]) {
			return false;
		}
	}

	return true;
}

describe("MyDateTime.getEpoch", function() {
  it("should return the seconds since 1970/01/01T00:00:00-03:00 up to your date", function() {
    assert(equalArrays(concat([2,3],[3,4]), [2,3,3,4]), 'arrays are not equal');
  });

  it("[] concatenated with [] should return []", function() {
  	assert(equalArrays(concat([],[]), []), 'arrays are not equal');
  })
});


//Tests for Date Utils

// //Octubre1 = new MyDateTime(1,10,1996)
// MyDateTime {hour: 0, min: 0, sec: 0, date: MyDate, toString: ƒ, …}
// Febrero29 = new MyDateTime(29,2,2000)
// MyDateTime {hour: 0, min: 0, sec: 0, date: MyDate, toString: ƒ, …}
// Julio20 = new MyDateTime(20,7,2005)
// MyDateTime {hour: 0, min: 0, sec: 0, date: MyDate, toString: ƒ, …}
// a = Octubre1.getEpoch()
// 844128000
// b = Febrero29.getEpoch()
// 951782400
// c = Julio20.getEpoch()
// 1121817600
// DateUtils.reverseGetEpoch(a)
// MyDateTime {hour: 0, min: 0, sec: 0, date: MyDate, toString: ƒ, …}
// f = DateUtils.reverseGetEpoch(a)
// MyDateTime {hour: 0, min: 0, sec: 0, date: MyDate, toString: ƒ, …}
// g = DateUtils.reverseGetEpoch(b)
// MyDateTime {hour: 0, min: 0, sec: 0, date: MyDate, toString: ƒ, …}
// h = DateUtils.reverseGetEpoch(c)
// MyDateTime {hour: 0, min: 0, sec: 0, date: MyDate, toString: ƒ, …}
// f.date
// MyDate {day: 1, month: 10, year: 1996, toString: ƒ, isBefore: ƒ, …}
// g.date
// MyDate {day: 29, month: 2, year: 2000, toString: ƒ, isBefore: ƒ, …}
// h.date
// MyDate {day: 20, month: 7, year: 2005, toString: ƒ, isBefore: ƒ, …}