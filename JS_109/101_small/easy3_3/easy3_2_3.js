/*
# -----------------------INSTRUCTIONS------------------------
# Bannerizer
Write a function that will take a short line of text, and write 
it to the console log within a box.
# --------------------------PROBLEM--------------------------

# Input: string
# Output: str within a box
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
# box width is equal to str.length + 4
each corner has a + 
empty line above and below the text

use string interpolation to layout the box
use String.repeat() to creat the box
*/
function logInBox(str) {
  let length = str.length
  let dash = '-'
  let corner = '+'
  let space = ' '
  console.log(`${corner}${dash.repeat(str.length + 2)}${corner}`)
  console.log(`| ${space.repeat(str.length)} |`)
  console.log(`| ${str} |`)
  console.log(`| ${space.repeat(str.length)} |`)
  console.log(`${corner}${dash.repeat(str.length + 2)}${corner}`)
}

logInBox('To boldly go where no one has gone before.'); 
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
logInBox('');