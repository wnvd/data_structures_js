function countUniqueValues(A) {
  if (A.length === 0) return 0;
  let i = 0,
    counter = 0;
  for (let j = 1; j < A.length; ++j) {
    if (A[i] === A[j]) i = j;

    if (A[i] !== A[j]) {
      counter++;
      i++;
    }
  }
  return counter + 1;
}

const x = countUniqueValues([-2, -1, -1, 0, 1]);
console.log(x);
