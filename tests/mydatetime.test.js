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