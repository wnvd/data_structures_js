// function validAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   let counter = {};
//   let counter2 = {};

//   for (const char of str1) {
//     counter[char] = (counter[char] || 0) + 1;
//   }
//   for (const char of str2) {
//     counter2[char] = (counter2[char] || 0) + 1;
//   }
//   for (const char of str1) {
//     if (counter[char] === counter2[char]) {
//       continue;
//     } else return false;
//   }
//   return true;
// }
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let counter = {};
  for (const char of str1) {
    counter[char] ? counter[char]++ : (counter[char] = 1);
  }
  for (const char of str2) {
    if (!counter[char]) {
      return false;
    } else {
      counter[char]--;
    }
  }
  return true;
}

let x = validAnagram("man", "can");
console.log(x);
x = validAnagram("rat", "car");
console.log(x);
x = validAnagram("awesome", "awesom");
console.log(x);
x = validAnagram("qwerty", "qwerty");
console.log(x);
x = validAnagram("neo", "one");
console.log(x);
