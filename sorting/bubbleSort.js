// naive approach
function bSort(arr) {
	for (let i = 0; i < arr.length; ++i) {
		for (let j = 0; j < arr.length; j++) {
			console.log(arr, arr[j], arr[j + 1]);
			if (arr[j] > arr[j + 1]) {
				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}
// console.log(bSort([1, 4, 3, 2, 5, 6, 3]));

// better approach
function bSort2(arr) {
	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

console.log(bSort2([1, 4, 3, 3]));

// optimzed bubble sort
// here we are adding a flag (noSwaps)
// if approach works if array in partially sorted
function bSort3(arr) {
	let noSwaps;
	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
	return arr;
}

console.log(bSort3([1, 4, 3, 3]));
