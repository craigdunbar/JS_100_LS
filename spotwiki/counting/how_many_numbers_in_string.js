/*
# -----------------------INSTRUCTIONS------------------------
Write a function to count how many numbers in a string

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
numInStr('a3b5c44d8')

# ----------------------------ALGO---------------------------
# split the string into an array of characters
create a counter with value 0
iterate over the array
if the element converted to a number is not NaN counter++
return counter
*/
function numInStr(str) {
  // let arr = str.split('');
  // let counter = 0;
  // arr.forEach(el => {
  //   isNaN(el) ? counter : counter++
  // })
  // return counter;

  // using filter and match

  return str.split('').filter(el => el.match(/\d/)).length
}
console.log(numInStr('a3b5c44d8')) // 5