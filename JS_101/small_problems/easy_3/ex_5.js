/*
# -----------------------INSTRUCTIONS------------------------
# Right triangles
write a function that takes a positive integer and logs 
a right angled triangle with sides of n stars.
The hypotenuse should run from lower left to upper right
# --------------------------PROBLEM--------------------------
# Input: integer
# Output: string
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
# initalize a funtion that takes an integer arguement
print the first line with (n - 1) spaces and then a star
print second line with (n - 2) spaces and 2 stars
carry on until you print a line with 0 spaces and n stars
*/
function triangle(num) {
  let blank = " ";
  let star = '*';
for( count = 1; count <= num; count ++) {
  console.log(`${blank.repeat(num - count)}${star.repeat(count)}`)
}
}
triangle(5);
triangle(9);