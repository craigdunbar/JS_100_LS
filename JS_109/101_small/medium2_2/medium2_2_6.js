/*
# -----------------------INSTRUCTIONS------------------------
Sum Square - Square Sum

Write a function that computes the difference between the square of the sum
of the first count positive integers and the sum of the squares of the 
first count positive integers.

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: integer representing the resut of sum squared - squares summed
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150
# ----------------------------ALGO---------------------------
# given the integer argument
create an array of elements with value 1 to the given integer
- this can be done using the rest parameter and map
to get the sum squared value, sum the elements and then square the result
to get the sum of squares value, square each element and add them together
return the result of subtracting the sum of squares from the sum squared
*/
function sumSquareDifference(num) {
  let arr = [...Array(num)].map((el, idx) => el = idx + 1)
  squareOfSum = (arr.reduce((a, b) => a + b) ** 2);
  squaresSum = (arr.map(el => el = el ** 2)).reduce((a, b) => a +b);
  return squareOfSum - squaresSum
}
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150