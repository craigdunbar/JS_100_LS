// Create a function that takes two strings as arguments 
// and return a boolean value true if the second string 
// has at least one leading substring that is the same 
// as a leading substring in the first string. 
// Substring is at least 2 char

// get the leading substrings using a loop and slice for both strings
// conpare the strings
// return true if a substrings is the same 

function sameSubstr(str1, str2) {
  let subArr1 = [];
  for (let i = 1; i < str1.length; i++) {
    let substring = str1.slice(0, i);
    subArr1.push(substring)
  }
  let subArr2 = []
  for (let i = 1; i < str1.length; i++) {
    let substring = str2.slice(0, i);
    subArr2.push(substring)
  }
  for (let j = 1; j < str2.length; j++) {
    if (subArr1[j] === subArr2[j]) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(sameSubstr('abcde', 'abiuop'));// true => 'ab', 'ab'
console.log(sameSubstr('abcdefg', 'abcrfo'))// true => 'abc', abc'
console.log(sameSubstr('abcdefg', 'fabcdefg')) //false (not a leading substr)
