function avgPair(arr, avg) {
  if (arr.length === 0) return false;
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    let num = (arr[l] + arr[r]) / 2;
    if (avg === num) return true;
    else if (num < avg) l++;
    else r--;
  }
  return false;
}
const x = avgPair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
console.log(x);
