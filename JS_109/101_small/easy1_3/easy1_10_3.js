/*
# -----------------------INSTRUCTIONS------------------------
Multiples of 3 and 5

Write a function that computes the sum of all numbers between
1 and the number passed in, that are multiples of 3 and 5.

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: sum of all integers between 1 and integer argument that are multiples of 3 or 5
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168
# ----------------------------ALGO---------------------------
# 
initalize a sum variable and assign it a value of zero
start a loop that goes from 1 to the given integer
for each iteration determine if the number is a multiple of 3 or 5
if it is then add it to the sum
if not skip it
return the sum
*/
function multisum(num) {
  let sum  = 0;
  for (let count = 1; count <= num; count ++) {
    if (count % 3 === 0 || count % 5 === 0) {
      sum += count 
    }
  }
  return sum;
}
console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168