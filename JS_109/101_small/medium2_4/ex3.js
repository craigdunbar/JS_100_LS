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
put the three numner arguments into an array
reduce the array to a single value
if it's not === 180 return invalid
if the array includes a 0 return invalid

use filter to see if the array contains 
only one 90, if so return right
all 3 numbers less than 90 return actute
one number greater than 90 return obtuse

*/
function triangle(num1, num2, num3) {
  let arr = Array(...arguments);
  if (arr.reduce((acc, el) => acc + el, 0) !== 180) return 'invalid';
  if (arr.includes(0)) return 'invlaid';
  
  if (arr.filter(num => num === 90).length === 1) {
  return 'right'
  } else if (arr.filter(num => num > 90).length === 1) {
    return 'obtuse'
  } else {
    return 'acute'
  }
}
console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"