function split(wholeArray) {
	const firstHalf = wholeArray.splice(0, wholeArray.length / 2);
	const secondHalf = wholeArray;
	return [ firstHalf, secondHalf ];
}

function merge(array1, array2) {
	let returnValue = [];
	let array1Counter = 0;
	let array2Counter = 0;
	if (array1.length === 1 && array2.length === 1) {
		if (array1[0] > array2[0]) {
			returnValue.push(array2[0]);
			returnValue.push(array1[0]);
		} else {
			returnValue.push(array1[0]);
			returnValue.push(array2[0]);
		}
		return returnValue;
	}

	for (let i = 0; i < array1.length + array2.length; i++) {
		if (array1[array1Counter] <= array2[array2Counter]) {
			returnValue.push(array1[array1Counter]);
			array1Counter++;
			if (array1Counter >= array1.length) {
				returnValue.concat(array2.splice(array2Counter));
				console.log('splice', array2);
				console.log('returnvalue', returnValue);
				break;
			}
		} else {
			returnValue.push(array2[array2Counter]);
			array2Counter++;
			if (array2Counter >= array2.length) {
				returnValue.concat(array1.splice(array1Counter));
				console.log('splice', array2.splice(array2Counter));
				console.log('returnvalue', returnValue);
				break;
			}
		}
	}
	console.log('afterloop', returnValue);
	return returnValue;
}

function mergeSort(wholeArray) {
	///base case is split value has a length of one
	if (wholeArray.length < 2) {
		return wholeArray;
	}
	const halved = split(wholeArray);
	const quarter1 = mergeSort(halved[0]);
	const quarter2 = mergeSort(halved[1]);

	return merge(quarter1, quarter2);

	/* your code here */
}
