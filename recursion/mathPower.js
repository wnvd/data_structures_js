// mimic Math.power()
function power(num, exp) {
	if (exp < 1) return 1;
	if (exp === 1) return num;
	return num * power(num, exp - 1);
}
console.log(power(7, 3));
console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));
