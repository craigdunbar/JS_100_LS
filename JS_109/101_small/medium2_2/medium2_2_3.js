/*
# -----------------------INSTRUCTIONS------------------------
Tri-Angles
A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.

Write a function that takes the three angles of a triangle as arguments 
and returns one of the following four strings representing the triangle's 
classification: 'right', 'acute', 'obtuse', or 'invalid'.

# --------------------------PROBLEM--------------------------

# Input: 3 integrs
# Output: string representing a type of triangle
# ---------------------------RULES---------------------------
# Explicit: To be a valid triangle, the sum of the angles must be exactly 180 degrees, 
and every angle must be greater than 0. 
If either of these conditions is not satisfied, the triangle is invalid.

You may assume that all angles have integer values, so you do not have to 
worry about floating point errors. You may also assume that the arguments are in degrees.


# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"
# ----------------------------ALGO----------
# ----------------------------ALGO---------------------------
# as before make an array from the given integrs
iterate over the array and for each element - 
if the sum of the arr values !== 180 return invalid
if the array has a value of 0 for any element return invalid
if every elemtnof the array is less than 90 return acute
if one elmeent is 90 return right
if one angle is greater than 90 return obtuse

*/
// function triangle(num1, num2, num3) {
//   let arr = [num1, num2, num3];
//   if (arr.includes(0) || (arr.reduce((a, b) => a +b) !== 180) ) {
//     return 'invalid'
//   } else if (arr.every(el => el < 90)) {
//     return 'acute';
//   } else if (arr.some(el => el > 90)) {
//     return 'obtuse'
//   } else {
//     return 'right'
//   }
// }
// using filter
function triangle(num1, num2, num3) {
  let arr = [...arguments] 
  if (arr.includes(0) || (arr.reduce((a, b) => a +b) !== 180) ) {
    return 'invalid'
  } else if (arr.filter(el => el < 90).length === 3) {
    return 'acute';
  } else if (arr.filter(el => el > 90).length === 1) {
    return 'obtuse';
  } else if (arr.filter(el => el === 90).length === 1) {
    return 'right'
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"