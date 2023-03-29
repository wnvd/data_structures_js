function lSearch(arr, val) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) return true;
	}
	return false;
}
console.log(lSearch([1, 4, 2, 1, 0, 8], 8));
console.log(lSearch([1, 4, 2, 1, 0, 8], 3));

// linear search which return an index
function linearSearch(arr, val) {
	for (let i = 0; i < arr.length; ++i) {
		if (arr[i] === val) return i;
	}
	return -1;
}
console.log(linearSearch([1, 3, 4, 5, 2], 5));
