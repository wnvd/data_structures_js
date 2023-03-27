function prodArray(arr) {
	if (arr.length === 0) return 1;
	return arr[0] * prodArray(arr.slice(1));
}
console.log(prodArray([1, 2, 3]));
