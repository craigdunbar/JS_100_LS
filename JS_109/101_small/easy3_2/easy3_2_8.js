/*
# -----------------------INSTRUCTIONS------------------------
Grade Book
Write a function that determines the mean (average) of the three scores passed to it,
and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'

# --------------------------PROBLEM--------------------------

# Input: 3 integers
# Output: string representing the grade based on the average of the 3 integers
# ---------------------------RULES---------------------------
# Explicit: Tested values are all between 0 and 100. 
There is no need to check for negative values or values greater than 100.

# Implicit:  

BEYOND?

# --------------------------EXAMPLES-------------------------
getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
# ----------------------------ALGO---------------------------
# get the average of the 3 integers 
if average is greater than 90 log 'A'
if average is between 80 and 90 log 'B'
etc.
*/
function getGrade(num1, num2, num3) {
  let average = ((num1 + num2 + num3)/ 3);
  if (average > 90) {
    return 'A';
  } else if ( average > 80 && average < 90) {
    return 'B'
  } else if ( average > 70 && average < 80) {
    return 'C'
  } else if ( average > 60 && average < 70) {
    return 'D'
  } else if ( average < 60) {
    return 'F'
  }
}
console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"