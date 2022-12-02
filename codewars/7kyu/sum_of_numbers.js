/*
# -----------------------INSTRUCTIONS------------------------
Given two integers a and b, which can be positive or negative, 
find the sum of all the integers between and including them 
and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

# ----------------------------ALGO---------------------------
# 
if a == b return a
make an array of the given numbers then sort ascending
initalise a loop
on each iteration at current number to a sum variable
return the sum
*/
function getSum(a, b) {
  if ( a === b) return a;
  let sum = 0;
  let arr = [a, b].sort((a, b) => a - b)
  for (let i = arr[0]; i <= arr[1]; i++) {
    sum += i
  }
  return sum;
}
// console.log(getSum(0,-1)) //,-1);
// console.log(getSum(0,1)) // 1
console.log(getSum(5, -1))