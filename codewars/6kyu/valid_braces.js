/*
# -----------------------INSTRUCTIONS------------------------

Write a function that takes a string of braces, and determines if 
the order of the braces is valid. 
It should return true if the string is valid, and false if it's invalid.

All input strings will be nonempty, and will only consist of parentheses, 
brackets and curly braces: ()[]{}.

A string of braces is considered valid if all braces are matched with 
the correct brace.


# --------------------------PROBLEM--------------------------

# Input: string
# Output: boolean
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False

# ----------------------------ALGO---------------------------
# for the string to be valid each type of brace must have an
opening brace and a closing brace and in the correct order.
setup 3 counters one for each type of brace
iterate over the string and add one to the counter for an opeing brace 
and subtract one for a closing brace
at the end the counter should be 0 for all 3 to be valid
// this doesnt work as we need to close the braces in the reverse order they were opened
to do this we need to iterate over the string and track the order in which the brace is opened
"[(])" square, curly, square, curly is false 
it should be square, curly, curly, square
set an array to track the opening braces 
let openArr = [];
open = ['[', '(']
if the next char is closing it need to be ')' or return false
*/

function validBraces (str) {
  let open = ['(', '[', '{'];
  let closed = [')', ']', '}'];
  let openArr = [];
  let pairs = ['()', '[]', '{}']

  for (let char of str) {
    if (open.includes(char)) {
      openArr = openArr.concat(char)
        if(openArr.length === str.length) {
          return false;
        }
    } else if (closed.includes(char)) {
      let combo = openArr.pop() + char
      // console.log(combo)
      if (!pairs.includes(combo)) {
        return false
      }
    }
  }
  return true;
}
console.log(validBraces("()))") === false);
console.log(validBraces("()") === true);
console.log(validBraces("[]") === true);
console.log(validBraces("{}") === true);
console.log(validBraces("(){}[]") === true);
console.log(validBraces("([{}])") === true);
console.log(validBraces("(}") === false);
console.log(validBraces("[(])") === false);
console.log(validBraces("({})[({})]") === true);
console.log(validBraces("(})") === false);
console.log(validBraces("(({{[[]]}}))") === true);
console.log(validBraces("{}({})[]") === true);
console.log(validBraces(")(}{][") === false);
console.log(validBraces("())({}}{()][][") === false);
console.log(validBraces("(((({{") === false);
console.log(validBraces("}}]]))}])") === false);