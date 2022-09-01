/*
# -----------------------INSTRUCTIONS------------------------
Triangle Sides

Write a function that takes the lengths of the three sides of 
a triangle as arguments and returns one of the following four 
strings representing the triangle's classification: 
'equilateral', 'isosceles', 'scalene', or 'invalid'.

# --------------------------PROBLEM--------------------------

# Input: 3 integrs
# Output: string representing a type of triangle
# ---------------------------RULES---------------------------
# Explicit: A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.

To be a valid triangle, the sum of the lengths of the two shortest sides must be greater 
than the length of the longest side, and every side must have a length greater than 0. 
If either of these conditions is not satisfied, the triangle is invalid.


# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"
# ----------------------------ALGO---------------------------
# given the three integers arguments
define an array of the integers.
sort the array in ascending order
if (arr[0] === 0) return invalid
if arr[0] + arr[1] < arr[2] return invalid
}
if arr[0] === arr[1] && arr[1] === arr[2] return equilateral
if arr[0] !== arr[1] && arr[1] === arr[2] return isoceles
if arr[0] !== arr[1] return scalene

*/
function triangle(num1, num2, num3) {
  let arr = [num1, num2, num3];
  
  arr.sort((a, b) => a - b);
  // console.log(arr)
  if (arr[0] === 0) {
    return 'invalid';
  } else if ((arr[0] + arr[1]) <= arr[2]) {
    return 'invalid';
  } else if (arr[0] === arr[1] && arr[1] === arr[2]) {
    return 'equilateral';
  } else if (arr[0] !== arr[1] && arr[1] === arr[2]) {
    return 'isoceles';
  } else if(arr[0] !== arr[1]) {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"