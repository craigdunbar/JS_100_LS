/*
# -----------------------INSTRUCTIONS------------------------

# Bannerizer
Write a function that will take a short line of text, and write it to the console log within a box.


# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
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
# use console.log to generate the box and string literals to insert the given sentence
*/
function logInBox(str) {
  let length = str.length;
  let dash = '-';
  let space = ' ';
  console.log(`+-${dash.repeat(length)}-+`);
  console.log(`| ${space.repeat(length)} |`);
  console.log(`| ${str} |`);
  console.log(`| ${space.repeat(length)} |`);
  console.log(`+-${dash.repeat(length)}-+`);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');