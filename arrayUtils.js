	function concat(array1, array2) {
		let arrResult = [];
		function pushear(array) {
			for (let value of array) {
				arrResult.push(value);
			}
			return arrResult;
		}
		pushear(array1);
		pushear(array2);
		return arrResult;
	}

	function deleteEqualItemsPerArray(array1) {
		for (let i = 0; i < array1.length; i++){
			secondLoop: for (let j = 0; j < array1.length; j++) {
				if(i === j){
					continue secondLoop;
				}
				if (array1[i] === array1[j]) {
					array1.splice(j, 1);
				}
			}
		}
	}

	function deleteEqualItemsBetweenTwoArrays(array1, array2) {
		for (let value of array1) {
			for (let i = 0; i < array2.length; i++) {
				if (value === array2[i]) {
					array2.splice(i, 1);
				}
			}
		}
	}

	function checkIfIsInTheArray(array1, v1){
		let result;
		for (let value of array1) {
			if (v1 === value) {
				return true;
			}
		}
		
	}

	function intersection(array1, array2){
		let arrResult = [];
		for (let value of array1){
			for (let i = 0; i < array2.length; i++) {
				if (value === array2[i]){
					if (!checkIfIsInTheArray(arrResult, value)){
						arrResult.push(value);	
					}
				} 
			}
		}
		return arrResult;  
	}

	function union(array1, array2){
		deleteEqualItemsPerArray(array1);
		deleteEqualItemsPerArray(array2);
		deleteEqualItemsBetweenTwoArrays(array1, array2);
		return concat(array1, array2);
	}
