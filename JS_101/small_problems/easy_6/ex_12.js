/*
# -----------------------INSTRUCTIONS------------------------
# Matching parentheses?
Write a function that takes a string arg and returns true if
all parentheses in the string are in matching pairs.
# --------------------------PROBLEM--------------------------

# Input: string
# Output: boolean
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
# ----------------------------ALGO---------------------------
# declare a function with str parameter
split the string into an array of characters
filter the array for '(' and ')' characters.
if the first parentheses found is '(' check to see if theres
an even number of '(' ans ')' then return true, if not then false
else if the first parenthese found is ')' return false
*/
// function isBalanced(str) {
//   let arr = str.split('');
//   let bracketArr = arr.filter(el => el === '(' || el === ')');
//   if (bracketArr[0] === ')' || bracketArr.length === 1) {
//     return false;
//   } 

//   let count = 0;
//   for (let idx = 0; idx < bracketArr.length; idx++) {
//     if (bracketArr[idx] === '(') {
//     count += 1;
//     } else {
//     count -= 1;
//     }
//     if (count < 0) {
//       return false;
//     } 
//   }
//   return true;
// }
// my solution above works but there's no need 
// to split into an array and filter. The count can
// be done right through the string.

function isBalanced(str) {
  let count = 0;
  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx] === '(') {
    count += 1;
    } else if (str[idx] === ')') {
    count -= 1;
    }
    if (count < 0) {
      return false;
    } 
  }
  return count === 0;
 // returning true doesnt work for a str with only one '('
};

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);