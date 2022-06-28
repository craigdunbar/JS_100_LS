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

# Input: 3 integers
# Output: string representing the type of triangle
# ---------------------------RULES---------------------------
# Explicit: 
To be a valid triangle, the sum of the angles must be exactly 180 degrees, 
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
# ----------------------------ALGO---------------------------
# create an array from the three given arguments
chaeck for a valid triangle by getting the sum of all elements
 - check that the sum is greater than 180
 - check that no element is equal to 0
 
 use if statements to check for the type of triangle
  - within the if statements use filter and length to determine the number
  of elments that satisfy the condition
 return the appropraite triangle name
*/
function triangle(side1, side2, side3) {
  let arr = [...arguments];
  if ((arr.reduce((a, b) => a +b) < 180) || arr.includes(0)) {
    return 'invalid';
  } 
  if ((arr.filter(el => el === 90).length === 1)) {
    return 'right';
  } else if (((arr.filter(el => el < 90).length === 3))) {
    return 'acute'
  } else if ((arr.filter(el => el > 90).length === 1)) {
    return 'obtuse';
  } 
}
console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"