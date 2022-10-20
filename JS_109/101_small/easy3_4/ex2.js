/*
# -----------------------INSTRUCTIONS------------------------
# Bannerizer
Write a function that will take a short line of text, and write 
it to the console log within a box.

# --------------------------PROBLEM--------------------------

# Input: str
# Output: str in a box
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
logInBox('To boldly go where no one has gone before.');
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
# ----------------------------ALGO---------------------------
# get the length of the given string
use console.log and string interpolation to build the box
*/
function logInBox(str) {
  let length = str.length
  let dash = '-';
  let space = ' ';
  console.log(`+${dash.repeat(length + 2)}+`)
  console.log(`|${space.repeat(length + 2)}|`)
  console.log(`|${space}${str}${space}|`)
  console.log(`|${space.repeat(length + 2)}|`)
  console.log(`+${dash.repeat(length + 2)}+`)

}
logInBox('To boldly go where no one has gone before.');