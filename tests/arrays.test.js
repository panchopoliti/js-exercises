
function equalArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}

	return true;
}

describe("concat", function() {
  it("[2,3] concatenated with [3,4] should return [2,3,3,4]", function() {
    assert(equalArrays(concat([2,3],[3,4]), [2,3,3,4]), 'arrays are not equal');
  });

  it("[] concatenated with [] should return []", function() {
  	assert(equalArrays(concat([],[]), []), 'arrays are not equal');
  })
});

describe("intersection", function(){
	it('should return the intersection between two arrays', function(){
		assert(equalArrays(intersection( [1,2,3,4],[2,4,6,8] ), [2,4]), 'elements are not equal');
	});

	it('should return the intersection among arrays', function(){
		assert(equalArrays(intersection( [1,2,2,2,3,4,5,5,5,5,5,5,5,5,5,5,5,5,6,7,8,8,9],[1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,5,5,5,7,9], [1,3,9,7], [1,3,7] ), [1,3,7] ), 'elements are not equal');
	});

});

describe("union", function() {
	it('should return the union between two arrays', function() {
		assert(equalArrays(union( [1,2,3,4],[2,4,6,8] ), [1,2,3,4,6,8] ), 'elements are not equal');
	});

	it('should return the union among arrays', function() {
		assert(equalArrays(union( [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,5,6,7,8,1,2,3,5,3,4,6,7,1,2,8],
		[2,3,4,1,1,1,1,1,1,1,1,2,3,4,5,6,7,8,3,4,5,2,4],
		[1,2,3,4,5,6,7,8,9,10,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3],
		[11,12,13,1,2,11,11,12,11,12,11,11,11,11,11,11,11] ),
		[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), 'elements are not equal');
	});
});

describe("indexOf", function() {
	it('should return the position in the array of the chosen element', function() {
		const myArr = [4,3,2,1,1,2,3,4];
		assert(indexOf(myArr, 2) === 2, 'elements are not equal');
	});

	it('should return the position in the array of the chosen element', function() {
		const myArr = [1,2,3,4];
		assert(indexOf(myArr, 2) === 1, 'elements are not equal');
	});
});

describe("filter", function() {
	it('should filter an array and return even numbers', function() {
		assert(equalArrays(filter([1,2,3,4,5,6], e => e%2 === 0), [2,4,6]), 'arrays are not equal');
	})

	it('should filter an array and return numbers bigger than 3', function() {
		assert(equalArrays(filter([1,2,3,4,5,6], e => e > 3), [4,5,6]), 'arrays are not equal');
	})

	it('should filter an array and return strings with more than 4 letters', function() {
		assert(equalArrays(filter(['pep','pepe','peter','pedro'], e => e.length > 4), ['peter','pedro']),
		'arrays are not equal');
	})

});

describe("map", function() {
	it('should duplicate elements of array', function() {
		assert(equalArrays(map([1,2,3], e => e*2), [2,4,6]), 'arrays are not equal');
	})
});


describe("head", function() {
	it('should return the first element of the array', function() {
		const myArr = [1,2,3,4];
		assert(head(myArr) === 1, 'elements are not equal');
	});
});

describe("tail", function() {
	it('should return a new array with all the elements without the first', function() {
		const myArr = [1,2,3,4];
		assert(equalArrays(tail(myArr), [2,3,4]), 'elements are not equal');
	});
});
