/*
# -----------------------INSTRUCTIONS------------------------
Palindromic Substrings
Write a function that returns a list of all palindromic substrings 
of a string. That is, each substring must consist of a sequence 
of characters that reads the same forward and backward. 


# --------------------------PROBLEM--------------------------

# Input: string
# Output: array of palindromes
# ---------------------------RULES---------------------------
# Explicit: The substrings in the returned list should be sorted by their order 
of appearance in the input string. 
Duplicate substrings should be included multiple times.
Use the substrings function you wrote in the previous exercise.
Consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, 
but 'Abcba' and 'Abc-bA' are not.
Single characters are not palindromes

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
# ----------------------------ALGO---------------------------
# use the substrings function from last exercise
once we have the array of substrings we need to iterate over the array
define a funciton called aplidromes
define an empty array
if the string element of the array is strinctly equal in reverse then it's a 
palindrome and should be pushed to the palindromes array 
*/ 

function palindromes(str) {
  let palindromesArr = [];
  let arr = substrings(str)
  arr.forEach(el => {
    if(el.split('').reverse().join('') === el && el.length > 1) {
      palindromesArr = palindromesArr.concat(el)
    }
  });
  return palindromesArr;
}
function substrings(str) {
  let substringsArr = [];
  for (let index = 0; index < str.length; index++) {
    let substring = str.slice(index, str.length)
    substringsArr = substringsArr.concat(leadingSubstrings(substring));
  }
  return substringsArr;
}
function leadingSubstrings(str) {
  let arr = [];
  for (let count = 1; count <= str.length; count ++) {
    let substring = str.slice(0, count);
    arr = arr.concat(substring);
  }
  return arr;
}
console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// // returns
// // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
// //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
// //   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// // returns
// // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]