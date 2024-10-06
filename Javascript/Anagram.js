function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  // return str1.split("").sort().join("") === str2.split("").sort().join(""); // Method 1
  // return str1.split("").every((item) => str2.split("").includes(item));// Method 2
  // Method 3
  /* const freq = {};

  for (let letter of str1) {
    freq[letter] = (freq[letter] || 0) + 1;
  }

  for (let letter of str2) {
    if (!freq[letter]) {
      return false;
    } else {
      freq[letter]--;
    }
  }

  return true; */
  // Method 3
  /* const str3 = str1.split("").filter((item) => str2.split("").includes(item));
  return str3 && true; */
}
console.log(areAnagrams("abc", "cab"));
