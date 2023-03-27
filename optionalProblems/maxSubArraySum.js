// Sliding window problem
function maxSubArray(arr, range) {
	if (arr.length < range || arr.length === 0) return null;
	let maxSum = 0; // here maxSum can also  be sum as Infinity
	let tempSum = 0;
	for (let i = 0; i < range; ++i) {
		maxSum = maxSum + arr[i];
	}
	tempSum = maxSum;
	for (let i = range; i < arr.length; ++i) {
		// here we are moving the window
		// subtracting at the begining and
		// adding at the end
		tempSum = tempSum - arr[i - range] + arr[i];
		// check max sum
		maxSum = Math.max(maxSum, tempSum);
	}
	return maxSum;
}

const x = maxSubArray([2, 3], 3);
console.log(x);
