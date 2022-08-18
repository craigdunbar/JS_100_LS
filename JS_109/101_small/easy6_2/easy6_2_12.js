/*
# -----------------------INSTRUCTIONS------------------------
Matching Parentheses?
Write a function that takes a string as an argument and returns 
true if all parentheses in the string are properly balanced, 
false otherwise. 
To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
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
# use str.replace to remove all characters that are not parentheses
first for openeing paren then agian for closing paren 
if opening paren length does not equal closing then return false
if the first paren in the string is closing then we also need to return false
*/
function isBalanced(str) {
  let allParens = str.replace(/[^'('')']/g, '')
  let openParens = str.replace(/[^'(']/g, '');
  let closingParens = str.replace(/[^')']/g, '');
  let open = 0;
  let close = 0;
  for (let count = 0; count < allParens.length; count ++) {
    if (allParens[count] === '(') {
      open += 1;
    } else {
      open -= 1;
    }
    if (open === -1) {
      return false;
    }
  }
  if (allParens[0] === ')') {
    return false
  } else if (openParens.length !== closingParens.length) {
    return false;
  } else {
    return true;
  }
}
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);