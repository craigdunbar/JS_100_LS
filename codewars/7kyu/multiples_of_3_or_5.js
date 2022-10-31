/*
# -----------------------INSTRUCTIONS------------------------
If we list all the natural numbers below 10 that are 
multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the 
multiples of 3 or 5 below the number passed in. 
Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
10 => 3, 5, 6, 9 => 23
# ----------------------------ALGO---------------------------
# create an array from 1 to one less tha  given integer
iterate over this array
if the current element is divisiable by 3 or 5 
push it to a new array
use reduce to get the sum of the values in the array
return this sum

*/
function multiples(num) {
  if (num <= 0) {
    return 0
  }
  let arr = [...Array(num -1)].map((el, idx) => el = idx + 1);
  let newArr = arr.filter(el => el % 3 === 0 || el % 5 === 0)
  return newArr.reduce((acc, el) => acc + el, 0);
}
multiples(10) //],23)