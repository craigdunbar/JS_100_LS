/*
# -----------------------INSTRUCTIONS------------------------
Tri-Angles

Write a function that has three arguments representing the 
three angles of a triangle and returns one of four classifications
as indicated below.

# --------------------------PROBLEM--------------------------

# Input: three numbers
# Output: string indicating what type of triangle is represented
by the given numbers or invalid
# ---------------------------RULES---------------------------
# Explicit: 
if sum of numbers !=== 180, invalid
all given numbers must be greater than 0, else invalid
one of the given numbers === 90, return right angle
all three numbers are < 90, return acute
one number is > 90, return obtuse
all numbers are integers and are in degrees
# Implicit: 

# --------------------------EXAMPLES-------------------------
triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"
# ----------------------------ALGO---------------------------
# initalise a function with three integer arguments
the arguments will be called angle1, angle2, and angle3
add the given numbers to an array
if sum of all 3 angles !=== 180 return invalid
if one of the angles === 0, return invalid
if one of the angles === 90, return right
if all 3 angles < 90, return acute
if one angle > 90, return obtuse
*/
function triangle(angle1, angle2, angle3) {
  let arr = [angle1, angle2, angle3];

  if (arr.reduce((a,b) => a + b) !== 180) {
    return 'invalid';
  } else if (arr.includes(0) === true) {
    return 'invalid';
  } else if (arr.includes(90) === true) {
    return 'right';
  } else if ((arr[0] < 90) && (arr[1] < 90) && (arr[2] < 90)) {
    return 'acute';
  } else if ((arr[0] > 90) || (arr[1] > 90) || (arr[2] > 90)) {
    return 'obtuse';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"