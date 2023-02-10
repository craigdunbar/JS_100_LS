/*
# -----------------------INSTRUCTIONS------------------------
Write a function toWeirdCase (weirdcase in Ruby) that accepts a 
string, and returns the same string with all even indexed 
characters in each word upper cased, and all odd indexed 
characters in each word lower cased. The indexing just explained 
is zero based, so the zero-ith index is even, therefore that 
character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical 
characters and spaces(' '). Spaces will only be present 
if there are multiple words. Words will be separated by 
a single space(' ').

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------

toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

# ----------------------------ALGO---------------------------
# 15
split the string into an array of chars
iterate over the array
if the current element has an even index - uppercase it
else lower case it
*/
function toWeirdCase(str) {
  return str.split(' ').map(word => {
    // console.log(word)
    return word.split('').map((el, idx) => {
      // console.log(el)
    if (idx % 2 === 0) {
      return el.toUpperCase();
    } else {
      return el.toLowerCase()
    }
  }).join('')
}).join(' ')
}
console.log(toWeirdCase( "String" ));//=> returns "StRiNg"
console.log(toWeirdCase( "Weird string case" ));//=> returns "WeIrD StRiNg CaSe"
console.log(toWeirdCase('This is a test')) //, 'ThIs Is A TeSt')