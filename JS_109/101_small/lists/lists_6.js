/*
# -----------------------INSTRUCTIONS------------------------
Palindromic Substrings
Write a function that returns a list of all palindromic substrings 
of a string. That is, each substring must consist of a sequence 
of characters that reads the same forward and backward. 


# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 
The substrings in the returned list should be sorted by their order 
of appearance in the input string. 
Duplicate substrings should be included multiple times.
Use the substrings function you wrote in the previous exercise.
Consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, 
but 'Abcba' and 'Abc-bA' are not.
Single characters are not palindromes
# Implicit: 

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
# use the sunstrings function from the previous exercise to get all the substrings
iterate over the substrings array and use filter to create a new array of only palindromes
return the palindromes
*/
function substrings(string) {
  return resultsArr = [...Array(string.length)].map((_, idx) => {
    return leadingSubstrings(string.slice(idx));
  }).flat();
}
function leadingSubstrings(str) {
  let substringArr = [];
  for (let idx = 0; idx < str.length; idx ++) {
      substringArr.push(str.slice(0, idx + 1));
  }
  return substringArr;
}
function palindromes(string) {
  return filteredArr = substrings(string).filter(el => {
    if (el.length > 1) {
    return (el === el.split('').reverse().join(''))
    };
  });
} 
console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]