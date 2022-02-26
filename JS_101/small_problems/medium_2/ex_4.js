/*
# -----------------------INSTRUCTIONS------------------------
Unlucky days

Write a function that takes a year as argument and returns
the  number of Firday the 13ths of that year.

# --------------------------PROBLEM--------------------------

# Input: integer representing a calendar year
# Output: integer representing the number of Friday the 13ths

# ---------------------------RULES---------------------------
# Explicit: assume the years are all greater than 1752
            assume it's the Gregorian Calendar

# Implicit: if none found return zero

# --------------------------EXAMPLES-------------------------
fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2
# ----------------------------ALGO---------------------------
# 
*/
function fridayThe13ths(year) { 
let count = 0;
for (let month = 0; month < 12; month++) {
  let date = new Date(year, month, 13);
  // console.log(date);
  // console.log(date.getDay());
  if (date.getDay() === 5){
    count++;
  }
}
return count;                            
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2