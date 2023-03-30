function sSort(arr) {
	for (let i = 0; i < arr.length; ++i) {
		let minIdx = i;
		for (let j = i + 1; j < arr.length; ++j) {
			if (arr[j] < arr[minIdx]) {
				minIdx = j;
			}
		}
		// here we are adding check so we dont
		// have to swap if our first number is smallest.
		if (i !== minIdx) {
			const temp = arr[i];
			arr[i] = arr[minIdx];
			arr[minIdx] = temp;
		}
	}
	return arr;
}

console.log(sSort([34, 22, 10, 19, 17]));
