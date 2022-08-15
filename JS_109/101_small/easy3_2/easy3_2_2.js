/*
# -----------------------INSTRUCTIONS------------------------
# Bannerizer
Write a function that will take a short line of text, and write 
it to the console log within a box.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: string containied within a box
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
logInBox('To boldly go where no one has gone before.');
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
# ----------------------------ALGO---------------------------
# use str.length + 2 to determine the size of the box
use repeat to build the --- and empty spaces around the string

*/
function logInBox(str) {
  let boxLength = str.length + 2
  let dash = '-';
  let space = ' ';
  console.log(`+${dash.repeat(boxLength)}+`)
  console.log(`|${space.repeat(boxLength)}|`)
  console.log(`|${space}${str}${space}|`) 
  console.log(`|${space.repeat(boxLength)}|`)
  console.log(`+${dash.repeat(boxLength)}+`)
}
logInBox('To boldly go where no one has gone before.');
logInBox('');