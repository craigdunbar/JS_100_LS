/*
# -----------------------INSTRUCTIONS------------------------
If we list all the natural numbers below 10 that are multiples 
of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the 
multiples of 3 or 5 below the number passed in. 
Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------

test(10) // 23
# ----------------------------ALGO---------------------------
# genrate an array from 1 to the given number
use map to make the elements numbers
iterate over that array and filter the ones that are multiples of 3 or 5
reduce the filtered array and return the result

*/
function test(num) {
  if (num < 0) return 0;
  let arr = [...Array(num)].map((el,idx) => el = idx)
  return arr.filter(el => el % 3 === 0 || el % 5 === 0).reduce((acc, val) => acc + val,0);
}
console.log(test(10))