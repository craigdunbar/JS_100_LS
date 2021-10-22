/*
# -----------------------INSTRUCTIONS------------------------
# Grade Book
# write a function that calculates the mean of 3 scores and 
# returns the associated grade
# --------------------------PROBLEM--------------------------

# Input: 3 x numbers
# Output: string
# ---------------------------RULES---------------------------
# Explicit: 90 <= score <= 100: 'A'
            80 <= score < 90: 'B'
            70 <= score < 80: 'C'
            60 <= score < 70: 'D'
             0 <= score < 60: 'F'
            ALl values are between 0 and 100
# Implicit: 

# --------------------------EXAMPLES-------------------------
getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
# ----------------------------ALGO---------------------------
#  initalise function with 3 integer arguements
  find the average of the 3 arguements
  determine the grade by comparing the average to the given range
   - case statement?
  return grade as a string
*/

function getGrade(first, second, third) {
  let average = Math.round((first + second + third) / 3);
  
  if (average >= 90) {
    return 'A'
  } else if (average >= 80 && average < 90) {
    return 'B'
  } else if (average >= 70 && average < 80) {
    return 'C'
  } else if (average >= 60 && average < 70) {
    return 'D'
  } else {
    return 'F'
  }
}
console.log(getGrade(95, 90, 93) === "A");
console.log(getGrade(50, 50, 95) === "D");