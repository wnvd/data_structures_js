// see how many times omg shows up in wowomgzomg.

function naiveStringSearch(needle, haystack) {
	let count = 0;
	for (let i = 0; i < haystack.length; ++i) {
		for (let j = 0; j < needle.length; ++j) {
			if (needle[j] !== haystack[i + j]) break;
			if (j === needle.length - 1) count++;
		}
	}
	return count;
}
console.log(naiveStringSearch('omg', 'wowomgzomg'));
console.log(naiveStringSearch('omg', 'wowomgzomgomg'));
