// Create a function that takes two strings as arguments a 
// return an array of sub strings that are the same 
// as the second argument.

// split the string into an array of words seperated by the given substring
// the length of the split array -1 is the number of occurences of the str delimiter
// use this number to generate an array of the given str

function extractStr(str1, str2) {
  let num = str1.split(str2).length - 1
  return [...Array(num)].map(el => el = str2)
}
console.log(extractStr('abcdefabcdefabcdef abcdefg', 'abc')); //['abc', 'abc', 'abc', 'abc'];
