/*
# -----------------------INSTRUCTIONS------------------------
Odd numbers

Log all odd numbers 1 to 99, inclusive to the console with
number on a seperate line. 

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------

# ----------------------------ALGO---------------------------
# initalise a loop from 1 to 99
if current number is odd log it to the console
*/
for (let count = 0; count < 100; count ++) {
  if (count % 2 === 1) console.log(count)
}