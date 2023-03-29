function bSearch(arr, val) {
	let l = 0,
		r = arr.length - 1;
	while (l <= r) {
		let mid = Math.floor(l + (r - l) / 2);
		if (arr[mid] === val) {
			return mid;
		} else if (arr[mid] > val) {
			r = mid - 1;
		} else {
			l = mid + 1;
		}
	}
	return -1;
}
console.log(bSearch([1, 2, 3, 4, 5, 6, 7, 8], 6));
