/*
# -----------------------INSTRUCTIONS------------------------

Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.
Examples (input --> output)

4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

Note you should only return a number, the count of divisors. 
The numbers between parentheses are shown only for you to see 
which numbers are counted in each case.


# --------------------------PROBLEM--------------------------

# Input: integer
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------


# ----------------------------ALGO---------------------------
# 
initalise a counter = 0
initalise a loop from 1 to given integer
if the integer % current iteration === 0
add one to the counter
return the counter
*/
function getDivisorsCnt(num) {
  let counter = 0;
  for (let count = 1; count <= num; count++) {
    if (num % count === 0) {
      counter += 1
    }
  }
  return counter;
}
console.log(getDivisorsCnt(1)) //,  1);
console.log(getDivisorsCnt(10)) //, 4);
console.log(getDivisorsCnt(11)) //, 2);
console.log(getDivisorsCnt(54)) //, 8);