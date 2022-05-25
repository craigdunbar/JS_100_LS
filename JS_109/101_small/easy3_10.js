/*
# -----------------------INSTRUCTIONS------------------------
What Century is That?
Write a function that takes a year as input and returns the century. 
The return value should be a string that begins with the century number, 
and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. 
So, the years 1901 - 2000 comprise the 20th century.
# --------------------------PROBLEM--------------------------

# Input: integer
# Output: string representing the century number
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
# to get the century we divide the year by 100 and use Math.ceil() 
to round up 
if the century ends in 0 append th
      ends in 1 append st
      ends in 2 append nd
              3 append rd
              4 - 20 append th
  so have to look at last two numbers if the century ends in a 2 or a 3 since it's 12th and 13th 
  not 12nd and 13rd
*/
function century(year) {
  let century = Math.ceil(year / 100);
  let centuryStr = String(century);

  if (centuryStr.slice(-2) === '11') {
    return `${centuryStr.slice(0, -2)}11th`
  } else if (centuryStr.slice(-2) === '12') {
    return `${centuryStr.slice(0, -2)}12th`
  } else if (centuryStr.slice(-2) === '13') {
    return `${centuryStr.slice(0, -2)}13th`
  } else if (centuryStr[centuryStr.length - 1] === '1') {
    return `${centuryStr}st`
  } else if (centuryStr[centuryStr.length - 1] === '2') {
    return `${centuryStr}nd`
  } else if (centuryStr[centuryStr.length - 1] === '3') {
    return `${centuryStr}rd`
  } else {
    return `${centuryStr}th`
  }
}

console.log(century(2000) === "20th");
console.log(century(2001) === "21st");
console.log(century(1965) === "20th");
console.log(century(256) === "3rd");
console.log(century(5) === "1st");
console.log(century(10103) === "102nd");
console.log(century(1052) === "11th");
console.log(century(1127) === "12th");
console.log(century(11201) === "113th");