/*
# -----------------------INSTRUCTIONS------------------------

Given a string of integers, return the number of odd-numbered 
substrings that can be formed.

# --------------------------PROBLEM--------------------------

# Input: string 
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
"1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

solve("1341") = 7. 

# ----------------------------ALGO---------------------------
# need to get all substrings of the string argument
- start at index 0 and get all the substrigns
- then got to index 1 and get all those substrings etc
put all substrings into an array
iterate over the array
convert each string to a number and check if it's odd
if it is odd, add it to another array
count the length of the array
return the length integer
*/
function solve(str) {
  let arr = [];
  let oddArr = [];
  for (let i = 0; i < str.length; i++) {
    let substring = str.slice(i);

    for (let count = 1; count <= substring.length; count ++) {
      let substrings = substring.slice(0, count);
      arr = arr.concat(substrings);
    }
  }
  arr.forEach(el => {
    if (el[el.length - 1] % 2 === 1) {
      oddArr = oddArr.concat(el)
    }
  })
  return oddArr.length;
}

console.log(solve("1341")) //,7);
console.log(solve("1357")) //,10);
console.log(solve("13471")) //,12);
console.log(solve("134721")) //,13);
console.log(solve("1347231")) //,20);
console.log(solve("13472315")) //,28);
console.log(solve("73349798887232632132425544116811276969377242627278638546418"));