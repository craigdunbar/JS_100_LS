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

# Input: 
# Output: 
# ---------------------------RULES---------------------------

# Explicit: Tested values are all between 0 and 100. 
There is no need to check for negative values or values greater than 100.

# Implicit: 

# --------------------------EXAMPLES-------------------------
getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
# ----------------------------ALGO---------------------------
# 
convert the three integers into an array
use reduce to get the average 
use a switch/ case statement where the switch expression
elevulates to true
the case statement will be the range of grades

*/
function getGrade(grade1, grade2, grade3) {
  let arr = [grade1, grade2, grade3]
  let average = Math.round(arr.reduce((acc, el) => acc + el, 0)/ arr.length);

  switch(true) {
    case average <= 100 && average > 90:
      console.log('A');
      break;
    case average <= 90 && average > 80:
      console.log('B');
      break;
    case average <= 80 && average > 70:
      console.log('C');
      break;
    case average <= 70 && average > 60:
      console.log('D');
      break;
    default: 
    console.log('F');
    break
  }
}
getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"