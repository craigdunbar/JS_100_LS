/*
# -----------------------INSTRUCTIONS------------------------
Triangle sides 

Write a function that takes the lengths of the three
sides of a triangle as arguments and returns one of four 
strings representing the type of triangle.

# --------------------------PROBLEM--------------------------

# Input: 3 numbers
# Output: string 
# ---------------------------RULES---------------------------
# Explicit: all 3 sied are the same => equilateral
            two sides the same => isoceles
            three different sides => scalene

  invalid if one side === 0, sum of two shortest sides must 
  be greater than longest side

# Implicit: alaway given 3 numbers
            numbers are non-negative

# --------------------------EXAMPLES-------------------------
triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"
# ----------------------------ALGO---------------------------
# initalise a function with 3 number arguments
num1, num2, num3
inialise an empty array called numArr
add nums 1 -3 to the array 
sort the arr
if arr[0], arr[1]or arr[2] === 0, return invalid
if arr[0] + arr[1] < arr[2], return invalid

if arr[0] === arr[1], AND arr[0] === arr[2]
AND arr[1] === arr[2] 
return equilateral
if arr[0] === arr[1], OR arr[0] === arr[2] 
OR arr[1] === arr[2] 
return isoceles
else return scalene
*/

function triangle(num1, num2, num3) {
  let numArr = [num1, num2, num3];
  numArr.sort((a, b) => a - b);
  if (numArr[0] === 0 || numArr[1] === 0 || numArr[2] === 0) {
    return 'invalid'
  } else if ((numArr[0] + numArr[1]) < numArr[2]) {
    return 'invalid'
  } else if ((numArr[0] === numArr[1]) && numArr[0] === numArr[2]) {
    return 'equliateral'
  } else if ((numArr[0] === numArr[1]) || (numArr[0] === numArr[2]) || (numArr[1] === numArr[2])) {
    return 'isosceles'
  } else {
    return 'scalene'
  }
}
console.log(triangle(3, 3, 3));     // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"