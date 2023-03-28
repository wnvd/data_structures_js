function fib(nth) {
	if (nth <= 2) return 1;
	return fib(nth - 1) + fib(nth - 2);
}
console.log(fib(4)); // 1, 1, 2, 3, 5

/* 
fib(4)
    fib(4 -1 =3)                     +           fib(4 -2 =2) return 1
    fib(3-1 = 2) return 1  + fib(3-2)  return 1








*/
