/*
# -----------------------INSTRUCTIONS------------------------
Multiples of 3 and 5

Write a function that computes the sum of all numbers between
1 and the number passed in, that are multiples of 3 and 5.
# --------------------------PROBLEM--------------------------

# Input: integer
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: integer is greater than 1
            sum from 1 to given integer inclusive

# Implicit: 

# --------------------------EXAMPLES-------------------------
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168
# ----------------------------ALGO---------------------------
# define the function multiSum with one parameter
initaiate a loop with starting value 1 and ending value
of given integer, incrementing by one each time
if the current integer is a multiple of 3 or 5
add this to the total.
return the total
*/
function multisum(num) {
  total = 0;
  for (let count = 1; count <= num; count++) {
    if (count % 3 === 0 || count % 5 === 0) {
      total += count;
    }
  }
  return total;
}
console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168