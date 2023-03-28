function prodArray(arr) {
	if (arr.length === 0) return 1;
	const num = arr[0];
	return arr[0] * prodArray(arr.slice(1));
}
console.log(prodArray([1, 2, 3]));

// without slice method
// here we use helper pass the length
function helper(arr, index) {
	if (index < 0) return 1;
	const num = arr[index];
	return num * helper(arr, index - 1);
}
function prodArray2(arr) {
	if (arr.length === 0) return 0;
	const index = arr.length - 1;
	const result = helper(arr, index);
	return result;
}
console.log(prodArray2([2, 2]));
