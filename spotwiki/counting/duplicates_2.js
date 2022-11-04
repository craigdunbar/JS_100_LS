/*
# -----------------------INSTRUCTIONS------------------------
Create a function that takes a string as an argument and 
returns a number representing occurrences of all letters 
that appears exactly twice.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
countDuplic('123123'); //=> 3
countDuplic('abcdea ab'); //=> 1

# ----------------------------ALGO---------------------------
# same as duplicates only this time filter chars that appear
twice
*/
function countDuplic(str) {
  let arr = str.split('');
  let countObj = {};
  arr.forEach(el => {
    Object.keys(countObj).includes(el) ? countObj[el]++ : countObj[el] = 1
  })
  return Object.values(countObj).filter(num => num === 2).length
}
console.log(countDuplic('123123')); //=> 3
console.log(countDuplic('abcdea ab')); //=> 1