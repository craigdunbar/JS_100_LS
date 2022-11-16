/*
# -----------------------INSTRUCTIONS------------------------

The goal of this exercise is to convert a string to a new string 
where each character in the new string is "(" if that character 
appears only once in the original string, or ")" if that character
 appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.


# --------------------------PROBLEM--------------------------

# Input: string
# Output: string
# ---------------------------RULES---------------------------
# Explicit: ignore case

# Implicit: 

# --------------------------EXAMPLES-------------------------
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

# ----------------------------ALGO---------------------------
# split the word into an array of chars
use filter and length to determine how many of the same char 
are in the array
if it's one add '(' to a new str
if it's more than 1 add ')' 
return the str
*/
function duplicateEncode(str) {
  let newStr = ''
  let arr = str.split('')
  arr.forEach(char => {
    let count = arr.filter(el => el === char.toLowerCase()).length;
    if (count === 1) {
      newStr += '('
    } else {
      newStr += ')'
    }
  })
  return newStr;
}
console.log(duplicateEncode("din")) //,"(((");
console.log(duplicateEncode("recede")) //,"()()()");
console.log(duplicateEncode("Success")) //,")())())","should ignore case");
console.log(duplicateEncode("(( @")) // "))((");
