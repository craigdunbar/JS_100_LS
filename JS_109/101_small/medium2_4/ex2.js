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

# --------------------------EXAMPLES-------------------------a
triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"
# ----------------------------ALGO---------------------------
use if statements to determine the type of triangle 
if all 3 given nums are equal return equilateral
if two are the same isosceles
if all are different scalene

first put the guard clauses in place
make an array from the numbers and sort the array
if the first two numbers combined are shorter than the third number it's not valid
all numbers must be greater than 0 or its not valid

*/
function triangle(num1, num2, num3) {
  let arr = Array(num1, num2, num3)
  arr.sort();
  if (arr[0] + arr[1] < arr[2] || arr.includes(0)) {
    return 'invalid';
  }

  if (arr[0] === arr[1] && arr[1] === arr[2] && arr[0] === arr[2]) {
    return 'equilateral'
  } else if (arr[0] === arr[1] || arr[1] === arr[2]){
    return 'isoceles'
  } else {
    return 'scalene'
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"