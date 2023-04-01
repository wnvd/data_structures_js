function insertionSort(arr) {
	let i, key, j;
	for (i = 1; i < arr.length; i++) {
		key = arr[i];
		j = i - 1;

		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = key;
	}
	return arr;
}

console.log(insertionSort([1, 9, 4, 2, 3]));
