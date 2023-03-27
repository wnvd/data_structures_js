function fac(num) {
	if (num === 1) return 1;
	return num * fac(num - 1);
}
console.log(fac(1));
console.log(fac(2));
console.log(fac(4));
console.log(fac(7));
