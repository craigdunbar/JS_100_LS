/*
# -----------------------INSTRUCTIONS------------------------
Odd numbers

Log all odd numbers 1 to 99, inclusive to the console with
number on a seperate line. 

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: log all odd numbers between 1 and 99

# Implicit: 

# --------------------------EXAMPLES-------------------------

# ----------------------------ALGO---------------------------
# create a loop from 1 to 99
if number % 2 === 1
log to console
*/
for (let count = 1; count < 100; count ++) {
  if (count % 2 === 1) {
    console.log(count);
  }
}