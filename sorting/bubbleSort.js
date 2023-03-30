function bSort(arr) {
	for (let i = 0; i < arr.length; ++i) {
		for (let j = i + 1; j < arr.length - 1; j++) {
			if (arr[i] > arr[j]) {
				const temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}

console.log(bSort([1, 4, 3, 2, 5, 6, 3, 6]));
