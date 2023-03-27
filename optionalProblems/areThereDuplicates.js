// you can use two in built function
// arguments : which creates a map of arguments with starting index 0
// which point to first argument.
// ... : spread operator which will return argument as an array

//  Using two pointers
function duplicates(...args) {
  // here we are sorting array of arguments
  args.sort();
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) return true;
    start++;
    next++;
  }
  return false;
}
// let x = duplicates(1, 2, 3, 4, 5, 1);
// console.log(x);
// x = duplicates("x", "y", "z");
// console.log(x);

//   using frq counter

function dupCollection() {
  let collection = {};
  // here we are creating counter of collection of of arguments
  for (let val in arguments) {
    collection[arguments[val]]
      ? collection[arguments[val]]++
      : (collection[arguments[val]] = 1);
  }
  for (let key in collection) {
    // here if any argument  in collection is greater than
    // 1 then it has a duplicate.
    if (collection[key] > 1) return true;
  }
  return false;
}
// const x = dupCollection(1, 2, 3, 4, 0, 5, 1);
// console.log(x);

// 5 head solution
function noDuplicatesInSet() {
  // we are creating a SET of arguments (as we know set has
  // a unique values) and taking its size(set has no length())
  // comparing it with length of arguments
  return new Set(arguments).size !== arguments.length;
}
const x = noDuplicatesInSet(1, 2, 3, 4, 5, 1);
console.log(x);
