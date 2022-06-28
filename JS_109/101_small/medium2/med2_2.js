/*
# -----------------------INSTRUCTIONS------------------------
Triangle Sides

Write a function that takes the lengths of the three sides of 
a triangle as arguments and returns one of the following four 
strings representing the triangle's classification: 
'equilateral', 'isosceles', 'scalene', or 'invalid'.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 
A triangle is classified as follows:

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
# 
initalise an array made up of the three given arguments
sort the array into ascending order
first check for invalid triangles - any side === 0
- sum of two shortest sides > than long side
if triangle is valid then check the numbers in the array against the 
given rules for the type of triangles
if all sides the same - return 'equilateral'
if two sides the same - return 'isosceles'
if all sides different - return 'scalene'
*/
function triangle(side1, side2, side3) {
  let array = [side1, side2, side3];
  array = array.sort((a, b) => a -b);
  
  if (array[0] + array[1] < array[2] || array.includes(0)) {
    return 'invalid';
  } else if (array[0] === array[1] && array[1] === array[2]) {
    return 'equilateral';
  } else if ((array[0] === array [1]) || (array[0] === array[2]) || (array[1] === array[2])) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"