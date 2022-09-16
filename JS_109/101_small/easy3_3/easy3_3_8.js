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

BEYOND?

# --------------------------EXAMPLES-------------------------
getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
# ----------------------------ALGO---------------------------
# calcualte the average of the 3 given grade arguments
to ndo this we can build an array of the 3 grades, reduce it to the sum of the grade
and divide it  by 3
then use conditional statements to return the correct grade

*/
function getGrade(num1, num2, num3) {
  let arr = Array(num1, num2, num3);
  let average = Math.round(arr.reduce((a, b) => a + b, 0) / 3);
  console.log(average);
  
  switch(true) {
    case average <= 100 && average >= 90:
      console.log('A'); 
      break;
    case average < 90 && average >= 80 :
      console.log('B');
      break;
    case average < 80 && average >= 70:
      console.log('C');
      break;
    case average < 70 && average >= 60:
      console.log('D');
      break;
    default:
    console.log('F');
  }
}
getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"