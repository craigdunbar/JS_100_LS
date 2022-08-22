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
# use the previous functions to retrieve all the substrings
use a conditional statement to determine if the substrings are palindromes
push the palidromes to an array
return this array
*/
function palindromes(str) {
  let allSubstringsArr = substrings(str)
  let palindromesArr = [];
  allSubstringsArr.forEach(el => {
    // console.log(el);
    // console.log(el.split('').reverse().join(''));
    if (el.length > 1 && el === el.split('').reverse().join('')) {
      palindromesArr = palindromesArr.concat(el);
    }
  });
  console.log(palindromesArr);
}
function substrings(str) {
  let allSubstrings = []
  for (let idx = 0; idx < str.length; idx++) {
    let substring = str.slice(idx)
    let substrings = leadingSubstrings(substring)
    allSubstrings = allSubstrings.concat(substrings)
  }
  return allSubstrings;
}
function leadingSubstrings(str, idx) {
  let arr = [];
  for (let count = 0; count < str.length; count++) {
    arr.push(str.slice(0, count + 1));
  }
  return arr;
}

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