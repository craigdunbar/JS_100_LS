/*
# -----------------------INSTRUCTIONS------------------------

Unlucky Days
Some people believe that Fridays that fall on the 13th day of the 
month are unlucky days. Write a function that takes a year as an argument 
and returns the number of Friday the 13ths in that year. 

# --------------------------PROBLEM--------------------------

# Input: integer representing a year
# Output: integer representing number of Friday's that fall on a 13
# ---------------------------RULES---------------------------
# Explicit: You may assume that the year is greater than 1752, which is when the 
United Kingdom adopted the modern Gregorian Calendar. 
You may also assume that the same calendar will remain in use for the foreseeable future

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2
# ----------------------------ALGO---------------------------
# use the date function to get the days for the given year
days are sunday = 0, monday = 1 etc.Friday is 5
get first day of the year 
iterate over each month of the year and see if any of the 13ths land on a 5 day 
ie friday
if so increase the friday13s count by one
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