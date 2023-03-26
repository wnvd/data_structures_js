function sameFrequency(num1, num2) {
  const len = Math.ceil(Math.log10(num1 + 1));
  const len2 = Math.ceil(Math.log10(num2 + 1));

  if (len !== len2) return false;

  const freq = {};
  // creating map of num1.
  while (num1 > 0) {
    const remainder = Math.floor(num1 % 10);
    num1 = Math.floor(num1 / 10);
    freq[remainder] ? freq[remainder]++ : (freq[remainder] = 1);
  }
  // comparing num2 freq in map
  while (num2 > 0) {
    const compareDigit = Math.floor(num2 % 10);
    num2 = Math.floor(num2 / 10);
    // if digit doesnt exist return false
    if (!freq[compareDigit]) return false;
    // if does exist decrement in map
    else freq[compareDigit]--;
  }
  return true;
}

let x = sameFrequency(182, 281); //true
y = sameFrequency(34, 14); // false
z = sameFrequency(3589578, 5879385); // true
a = sameFrequency(22, 222); // false
console.log(x, y, z, a);
