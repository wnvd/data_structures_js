function recurRange(num) {
	if (num === 0) return 0;
	return num + recurRange(num - 1);
}
console.log(recurRange(6));
console.log(recurRange(10));
