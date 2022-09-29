/*
# -----------------------INSTRUCTIONS------------------------
Unlucky days

Write a function that takes a year as argument and returns
the  number of Firday the 13ths of that year.

# --------------------------PROBLEM--------------------------

# Input: integer representing a year
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: assume the years are all greater than 1752
            assume it's the Gregorian Calendar

# Implicit: if none found return zero

# --------------------------EXAMPLES-------------------------a
fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2
# ----------------------------ALGO---------------------------
# given the integer argument use new Date() method to 
ge the days that are 13ths
*/
function fridayThe13ths(year) {
  let arr = []
  for (let month = 0; month < 12; month ++) {
  let date = new Date(year, month, 13);
  if (date.getDay() === 5) { // 5 represents Friday
    arr = arr.concat(date)
  }
  }
  return arr.length;
}
console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2