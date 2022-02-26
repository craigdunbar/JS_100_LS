/*
# -----------------------INSTRUCTIONS------------------------
Sum Square - Square Sum

Write a function that computes the difference between the 
square of the sum of the given integer argument and the sum 
of the squares of the first given integer argument
# --------------------------PROBLEM--------------------------

# Input: integer
# Output: integer result of subtracting the square of the sums 
- the sum of the squares.
# ---------------------------RULES---------------------------
# Explicit: argument is an integer

# Implicit: no non- negative integers

# --------------------------EXAMPLES-------------------------
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150
# ----------------------------ALGO---------------------------
# define a function with an integer argument
initalise an empty array
initalise a loop to add the integers up to the given integer
into the array. ie if 3 is the argument arr = [1, 2, 3]
calculate the square of the sum of the array elements ie
(1 + 2 + 3) ** 2 using reduce
calculate the sum of the square of the elements ie
(1**2 + 2**2 + 3**2) using reduce
calculate the differnce by subtracting the two numbers

*/
function sumSquareDifference(num) {
  let arr = []
  let sumSquare = 0;
  let squareSum = 0;
  for (let count = 1; count <= num; count ++) {
    arr.push(count)
  }
  sumSquare = (arr.reduce((a,b) => a + b)) ** 2;
  squareSum = (arr.reduce((a, b) => a + b ** 2));
  return sumSquare - squareSum;
}
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150