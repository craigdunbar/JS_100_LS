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
# Output: String character representing the overall score
# ---------------------------RULES---------------------------
# Explicit: Tested values are all between 0 and 100. 
There is no need to check for negative values or values greater than 100.

# Implicit: 

# --------------------------EXAMPLES-------------------------
getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
# ----------------------------ALGO---------------------------
# write a function that takes the three integer arguments
calculates the average 
- sum of the three numbers divided by three
determines what grade that represents 
- if average is >= 90 <= 100 return A
- if average is >= 80 < 90 return B
- if average is >= 70 < 80 return C
- if average is >= 60 < 70 return D
- if average is > 0 < 60 return F
returns the grade
*/
function getGrade(grade1, grade2, grade3) {
  let average = Math.ceil((grade1 + grade2 + grade3) / 3);

  switch(true) {
    case average <= 100 && average >= 90:
      console.log('A');
      break;
    case (average <= 90 && average >= 80):
      console.log('B');
      break;
    case (average <= 80 && average >= 70):
      console.log('C');
      break;
    case (average <= 70 && average >= 60):
      console.log('D');
      break;
    default:
      console.log('F');
  }
}
getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"