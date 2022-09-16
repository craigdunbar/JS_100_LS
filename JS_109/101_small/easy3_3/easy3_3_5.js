/*
# -----------------------INSTRUCTIONS------------------------
# Right Triangles

Write a function that takes a positive integer, n, as an argument 
and logs a right triangle whose sides each have n stars. 
The hypotenuse of the triangle (the diagonal side in the images below) 
should have one end at the lower-left of the triangle, 
and the other end at the upper-right.

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: triangle made up of spaces and stars
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
# ----------------------------ALGO---------------------------
# initalise a loop going from 0 to n
use console.log() to buikld the triangle with the irst line having n -1 spaces
followed by a star
second line n -2 spaces and 2 stars etc
to the end of the loop
*/
function triangle(num) {
  let space = ' '
  let star = '*'
  for (let count = 1; count <= num; count ++) {
    console.log(`${space.repeat(num - count)}${star.repeat(count)}`)
  }
}
triangle(5);

//     *
//   **
//   ***
// ****
// *****

triangle(9);

//         *
//       **
//       ***
//     ****
//     *****
//   ******
//   *******
// ********
// *********