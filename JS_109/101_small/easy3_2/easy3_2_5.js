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
# Output: log lines of stars and spaces to form triangle
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
# given the integer argument log 
initalise a loop 
integer - 1 spacers and one star on first line
integer - 2 spaces and two stars on second line
etc.
up until you have integer - integer for spaces and integer stars

*/
function triangle(num) {
  let space = ' ';
  let star = '*';
  for (let count = 0; count <= num; count++) {
    console.log(`${space.repeat(num - count)}${star.repeat(count)}`)
  }
}
triangle(5)
triangle(9)