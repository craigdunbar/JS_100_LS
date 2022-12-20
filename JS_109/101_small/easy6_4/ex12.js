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
deinfe a counter = 0;
split the string into an array of chars
iterate over the chars
if the ccurrent char is '(' counter += 1
if the current char is ')' counter -= 1
if counter is ever -1 return false
if counter is 0 at the end return true

*/
// function isBalanced(str) {
//   let counter = 0;
//   let arr = str.split('')
//   for (let i = 0; i < arr.length; i++) {
//     let char = arr[i];
//     if(char === '(') {
//       counter += 1;
//     } else if (char === ')') {
//       counter -= 1;
//     }
//     if (counter === -1) return false;
//   }
//   if (counter === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isBalanced("What (is) this?") === true);
// console.log(isBalanced("What is) this?") === false);
// console.log(isBalanced("What (is this?") === false);
// console.log(isBalanced("((What) (is this))?") === true);
// console.log(isBalanced("((What)) (is this))?") === false);
// console.log(isBalanced("Hey!") === true);
// console.log(isBalanced(")Hey!(") === false);
// console.log(isBalanced("What ((is))) up(") === false);

// refactor to inclue {} and [];

function isBalanced(str) {
  let counter = 0;

  let arr = str.split('')
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if(char === '(' || char === '{' || char === '[') {
      counter += 1;
    } else if (char === ')' || char === '}' || char === ']') {
      counter -= 1;
    }
    if (counter === -1) return false;
  }
  if (counter === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isBalanced("{What}[(is) this?]") === true);

// console.log(isBalanced("What (is) this?") === true);
// console.log(isBalanced("What is) this?") === false);
// console.log(isBalanced("What (is this?") === false);
// console.log(isBalanced("((What) (is this))?") === true);
// console.log(isBalanced("((What)) (is this))?") === false);
// console.log(isBalanced("Hey!") === true);
// console.log(isBalanced(")Hey!(") === false);
// console.log(isBalanced("What ((is))) up(") === false);