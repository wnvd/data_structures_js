function isSubsequence(str, str2) {
	if (str2.length < str.length) return false;
	// here i works kind of like a check
	let i = 0;
	for (j = 0; j < str2.length; ++j) {
		if (str[i] === str2[j]) i++;
		// here if i reaches length of the str
		// then it has successfully traversed (matched)
		// the subsequence.
		if (i === str.length) return true;
	}
	return false;
}

console.log(isSubsequence('abc', 'abracadabra'));
