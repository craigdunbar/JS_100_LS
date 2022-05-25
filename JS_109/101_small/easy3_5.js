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
# Output: logged stars representing a triangle
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
# 
the first line logs (integer - 1) spaces then a star
the second line logs (integer - 2) spaces then two stars
so on until the last line is (integer - integer) which is zero spaces and integer stars

initalise a loop with a counter starting at 1
log integer - count spaces and stars * count 
increment the counter by one on each iteration
until the counter === integer

*/
function triangle(int) {
for (let count = 1; count <= int; count ++) {
  console.log(`${' '.repeat(int - count)}${'*'.repeat(count)}`);
}

}
triangle(5);
triangle(9);