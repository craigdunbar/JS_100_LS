/*
# -----------------------INSTRUCTIONS------------------------

 Right Triangles

Write a function that takes a positive integer, n, as an argument 
and logs a right triangle whose sides each have n stars. 
The hypotenuse of the triangle (the diagonal side in the images below) 
should have one end at the lower-left of the triangle, 
and the other end at the upper-right.

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: log *'s to make triangle
# ---------------------------RULES---------------------------

# Explicit: 

# Implicit: 

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
# to build the triangle use spaces and stars
the top line is n-1 spaces and 1 star
2ne line is n - 2 spaces and 2 stars
continue to n - n spaces and n stars
initalise a loop to log one less space and
one more star on each iteration
*/
function triangle(n) {
  let space = ' ';
  let star = '*'
  for (let count = 1; count <= n; count++) {
    console.log(`${space.repeat(n - count)}${star.repeat(count)}`);
  }
}
triangle(5);
triangle(9);