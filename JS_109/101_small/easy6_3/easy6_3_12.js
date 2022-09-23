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
# generate an array of only the parentheses
check the order of the parentheses
loop over the array of parens
if the first paren is closing return false
if the number of opening !== number of closing return false
if the number of closing is > than opening at any point in iteration return false
to do these checks we need a variable that tracks opening and closing counts

*/
function isBalanced(str) {
  str = str.replace(/[a-z0-9 ? !]/gi, '');

  if (str[0] === ')') {
    return false;
  }

  let open = 0;
  let closed = 0;
  for (let char of str) {
    if (char === '(') {
      open += 1;
    } else {
      closed += 1
    }
    if (closed > open) {
      return false;
    }
  }
  if (open === closed) {
    return true;
  } else if (open > false) {
    return false;
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