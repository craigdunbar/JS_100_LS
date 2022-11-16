/*
# -----------------------INSTRUCTIONS------------------------
Legend:
-Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
-Function input: String contains only letters, uppercase letters are unique.
Task:
Place all people in alphabetical order where Mothers are 
followed by their children, i.e. "aAbaBb" => "AaaBbb". 

# --------------------------PROBLEM--------------------------

# Input: string
# Output: string sorted into aplhabetical order with uppercase before lower
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
"aAbaBb" => "AaaBbb"

# ----------------------------ALGO---------------------------
# 
split the string into an array
use a case insensitive sort 
*/
function find_children(str) {
  let arr = str.split('').sort();
  // console.log(arr);
  // return arr.sort((a,b) => a.localeCompare(b, 'en-US', {caseFirst: 'upper'})).join('');
  return arr.sort((a,b) =>{
    a = a.toUpperCase();
    b = b.toUpperCase();
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }).join('');
}

console.log(find_children("beeeEBb")) //, "BbbEeee");
console.log(find_children("uwwWUueEe")) //, "EeeUuuWww");
console.log(find_children("abBA")) //, "AaBb");
console.log(find_children("AaaaaZazzz")) //, "AaaaaaZzzz");
console.log(find_children("CbcBcbaA")) //, "AaBbbCcc");
console.log(find_children("xXfuUuuF")) //, "FfUuuuXx")