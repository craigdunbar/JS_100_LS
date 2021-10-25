/*
# -----------------------INSTRUCTIONS------------------------
# What century is that?
Write a function that takes a year as input
and returns the century with 'st', 'nd', 'rd', or 'th' 
as appropriate for that number.
# --------------------------PROBLEM--------------------------

# Input: integer
# Output: string
# ---------------------------RULES---------------------------
# Explicit: new centuries are years that end with 01

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
# initialise a function with an integer arguement
calculate the century from the given integer
check the last number of the century and 
append the correct ending
*/
function century(year) {
  let centuryStr = String(Math.ceil(year / 100));
  if (centuryStr.slice(-2) === '11' || centuryStr.slice(-2) === '12' ||
      centuryStr.slice(-2) === '13') {
        console.log(`${centuryStr}th`)
  } else {
  let lastDigit = centuryStr[centuryStr.length - 1];
  // console.log(centuryStr);
  switch (lastDigit) {
    case '1' :
      console.log(`${centuryStr}st`);
      break;
    case '2' :
      console.log(`${centuryStr}nd`);
      break;
    case '3' :
      console.log(`${centuryStr}rd`);
      break;
    default : 
      console.log(`${centuryStr}th`);
  }
}
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"