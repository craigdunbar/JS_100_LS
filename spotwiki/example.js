// Create a function that takes two strings as arguments and 
// return a boolean value true if the second string has at least 
// one leading substring that is the same as a leading substring 
// in the first string. Substring is at least 2 char. 

// generate leading substrings 
// use include to se if str2 contains any

function sameSubstr(str1, str2) {
  let subArr1 = [];
  let subArr2 = [];
  for (let i = 0; i < str1.length - 1; i ++) {
    substring = str1.slice(0, i + 2)
    subArr1.push(substring)
  }
  for (let j = 0; j < str2.length - 1; j ++) {
    substrings = str2.slice(0, j + 2)
    subArr2.push(substrings)
  }
  for (let i = 0; i < subArr1.length; i++) {
    console.log(subArr1[i])
    if (subArr2.includes(subArr1[i])) {
      return true;
    } else {
      return false
    }
  }
}


console.log(sameSubstr('abcde', 'abiuop'));// true => 'ab', 'ab'
console.log(sameSubstr('abcdefg', 'abcrfo'))// true => 'abc', abc'
console.log(sameSubstr('abcdefg', 'fabcdefg')) //false (not a leading substr)
