/*
# -----------------------INSTRUCTIONS------------------------
// Find the longest substring in alphabetical order.

// Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

// There are tests with strings up to 10 000 characters long so your code will need to be efficient.

// The input will only consist of lowercase characters and will be at least one letter long.

// If there are multiple solutions, return the one that appears first.


# --------------------------PROBLEM--------------------------
input : String
ouput : substring of string

# ---------------------------RULES---------------------------
# Explicit: 
longest alphabetical substring
// lowercase characters and will be at least one letter long.
// the one that appears first
# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
/ ['asd', 'as'],
// ['a' 'as', 'asd', 's', 'sd', 'd']
// ['a' 'as', 's', 'd']
# -----------------ALGO and Data Structure ------------------
define and empty array for the substrings
// define another array to hold alphabetical substrings

// iniatlise a loop 
// starting at index 0 use slice(i) to get the substring
// use a second loop starting at count 1
// use slice on the substring with count to get all substrings
// add the substrings to a new array

// iterate over the substrings array
// - sort each element alphabetically
// - if the sorted element !== original element
// it's not aplhabetical , continue
// if alphabetical add that to alpha array
// - 
// once the array contains only aplhabetical substrings
// iterate again getting the lengths 

// and return the longest substring
*/
function longest(str) {
  let subArr = [];
  let longest = []
  let counter = 0

  for (let i = 0; i < str.length; i++) {
    let substring = str.slice(i)
    // console.log(substring)

    for (let count = 0; count < substring.length; count ++) {
      let substrings = substring.slice(0, count + 1);
      subArr = subArr.concat(substrings)
    }
  }
  
  let alphaSub = subArr.filter(el => {
    let sortedStr = el.split('').sort().join('')
    return el === sortedStr;
  })
  
  alphaSub.forEach(el => {
    if (el.length > counter) {
      counter = el.length;
      longest.push(el);
    }
  })
  return longest[longest.length - 1];
}

// ['asd', 'as'],
// ['nab', 'ab'],
// ['abcdeapbcdef', 'abcde'],
// ['asdfaaaabbbbcttavvfffffdf', 'aaaabbbbctt'],
// ['asdfbyfgiklag', 'fgikl'],
// ['z', 'z'],
// ['zyba', 'z']

console.log(longest('asd'));
console.log(longest('nab'));
console.log(longest('abcdeapbcdef'));
console.log(longest('asdfaaaabbbbcttavvfffffdf'));
console.log(longest('asdfbyfgiklag'));
console.log(longest('z'));
console.log(longest('zyba'));

// ['asd', 'as'],
// ['nab', 'ab'],
// ['abcdeapbcdef', 'abcde'],
// ['asdfaaaabbbbcttavvfffffdf', 'aaaabbbbctt'],
// ['asdfbyfgiklag', 'fgikl'],
// ['z', 'z'],
// ['zyba', 'z']