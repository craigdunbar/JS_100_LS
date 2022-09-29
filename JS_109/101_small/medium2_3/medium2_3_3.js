/*
# -----------------------INSTRUCTIONS------------------------
Tri-Angles

Write a function that has three arguments representing the 
three angles of a triangle and returns one of four classifications
as indicated below.

# --------------------------PROBLEM--------------------------

# Input: 3 integers
# Output: string 
# ---------------------------RULES---------------------------
# Explicit: 
if sum of numbers !== 180, invalid
all given numbers must be greater than 0, else invalid
one of the given numbers === 90, return right angle
all three numbers are < 90, return acute
one number is > 90, return obtuse
all numbers are integers and are in degrees

# Implicit: 

# --------------------------EXAMPLES-------------------------a
triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"
# ----------------------------ALGO---------------------------
# 
convert the given integers into an array

if one angle is 0 then return invalid
- use includes method
if sum of all integers does not = 180 return invalid
- use reduce method
if one integer is 90 return right
- use filter and length
if all 3 numbers are < 90 return acute
- use filter and length
if one number is > 90 return obtuse
- use filter and length
*/
function triangle(num1, num2, num3) {
  let arr = [num1, num2, num3];
  if (arr.includes(0)) {
    return 'invalid'
  } else if (arr.reduce((a, b) => a + b) !== 180 ) {
    return 'invalid'
  } else if (arr.filter(num => num === 90).length === 1) {
    return 'right'
  } else if (arr.filter(num => num < 90).length === 3) {
    return 'acute'
  } else if (arr.filter(num => num > 90).length === 1) {
    return 'obtuse'
  }
}
console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"