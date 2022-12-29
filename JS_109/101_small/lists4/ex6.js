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
use the substings function fomr previous exercise
iterate over the substrings array and see if any of the words are the same in reverse
- check by converting to a string then split to array then reverse and join
*/
function palindromes(str) {
  let arr = [];
  let resultsArr = [];
  for (let i = 0; i < str.length; i++) {
    let substring = str.slice(i);
    for (let j = 0; j < substring.length; j++) {
      let substrings = substring.slice(0, j + 1);
      arr.push(substrings)
    }
  }
  arr.filter(char => char.length > 1).forEach(el => {
    if (el.split('').reverse().join('') === el) {
      resultsArr.push(el)
    }
  })
  return resultsArr;
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