/*
# -----------------------INSTRUCTIONS------------------------
Complete the findNextSquare method that finds the next integral perfect square 
after the one passed as a parameter. 
Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. 
You may assume the parameter is non-negative.

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: return -1 is argument is not perfect square

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square

121 sqrt root = 11 so perfect square
125 sqrt = 11.18033 so not perfect square so return -1


# ----------------------------ALGO---------------------------
# check the given integer is perfect square
if not return -1

initalise a loop to add one to the argument
check for square on eacdh iteration
if square return current num

*/
function findNextSquare(num) {
  if (Math.sqrt(num) !== Math.floor(Math.sqrt(num))) {
    return - 1;
  }
  while (true) {
    num = num + 1;
    if (Math.sqrt(num) === Math.floor(Math.sqrt(num))) {
      break;
    }
  }
  return num;
}
console.log(findNextSquare(121)) //, 144, "Wrong output for 121");
console.log(findNextSquare(625)) //, 676, "Wrong output for 625");
console.log(findNextSquare(319225)) //, 320356, "Wrong output for 319225");
console.log(findNextSquare(15241383936)) //, 15241630849, "Wrong output for 15241383936");
console.log(findNextSquare(155)) //, -1, "Wrong output for 155");
console.log(findNextSquare(342786627)) //, -1, "Wrong output
