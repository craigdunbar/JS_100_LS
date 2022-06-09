/*
# -----------------------INSTRUCTIONS------------------------
Matching Parentheses?
Write a function that takes a string as an argument and returns 
true if all parentheses in the string are properly balanced, 
false otherwise. 
To be properly balanced, parentheses must occur in matching '(' and ')' pairs.
# --------------------------PROBLEM--------------------------

# Input: string
# Output: boolean
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
# ----------------------------ALGO---------------------------
# given the string argument
spilt the string into an array of characters
iterate over the array
if the character is an '(' add one to openParen count
if  the character is an ')' add one to closeParen count
if neither continue
after the iteration compare the two couunts
return true if they are equal, false otherwise
*/
// function isBalanced(str) {
//   let arr = str.split('');
//   let openParen = 0;
//   let closeParen = 0;

//   for (let idx = 0; idx < arr.length; idx++) {
//     if (arr.indexOf('(') <= arr.indexOf(')')) {
//       if (arr[idx] === '(') {
//         openParen += 1;
//       } else if (arr[idx] === ')') {
//         closeParen += 1;
//       }
//     } else {
//       return false;
//     }
//     if (closeParen > openParen) {
//       return false;
//     }
//   }
//   return openParen === closeParen;
// }

// LS solution is more concise
// refactor to include other paired character
// note my solution doesnt work on quotes
// try using an object instead of an array?
function isBalanced(string) {
  let leftPairs = ['(', '[', '{'];
  let rightPairs = [')', ']','}'];
  let parens = 0;
  for (let idx = 0; idx < string.length; idx++) {
    if (leftPairs.includes(string[idx])) {
      parens += 1;
    } else if (rightPairs.includes(string[idx])) {
      parens -= 1;
    }
    if (parens < 0) return false;
  }
  return parens === 0;
};
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?")  === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

console.log(isBalanced("{What}[(is) this?]") === true);
