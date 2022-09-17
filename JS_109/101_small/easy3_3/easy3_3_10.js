/*
# -----------------------INSTRUCTIONS------------------------
hat Century is That?
Write a function that takes a year as input and returns the century. 
The return value should be a string that begins with the century number, 
and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. 
So, the years 1901 - 2000 comprise the 20th century.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
# ----------------------------ALGO---------------------------
# # to calculate the century we need to use Math.ceil(year / 100)
use if.. else statements to append the correct strings
*/
function century(year) {
  let century = String(Math.ceil( year / 100));
  // console.log(century);
  if (century.endsWith('0')) {
    return century + 'th'
  } else if(century.endsWith('1') && century !== '11') {
    return century + 'st'
  } else if (century.endsWith('2') && century !== '12') {
    return century + 'nd';
  } else if (century.endsWith('3') && century !== '13' && century.slice(-2) !== '13') {
    return century + 'rd';
  } else if (century === '11') {
    return century + 'th';
  } else if (century === '12') {
    return century + 'th';
  } else if (century.slice(-2) === '13') {
    return century + 'th'
  }
}
console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
console.log(century(2266)); 