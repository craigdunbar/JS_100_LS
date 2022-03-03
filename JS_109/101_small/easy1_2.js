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
# initaise a for loop 
initalise count variable to 0, continue the loop until count
 <= 99,
increment count by one each iteration
if the count variable is odd, log it to the console.
*/
for (let count = 0; count <= 99; count++) {
  if (count % 2 === 1) {
    console.log(count);
  }
}
