/*
# -----------------------INSTRUCTIONS------------------------
Lettercase Percentage Ratio
Write a function that takes a string and returns an object containing 
the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither

# --------------------------PROBLEM--------------------------

# Input: string
# Output: object
# ---------------------------RULES---------------------------
# Explicit: You may assume that the string will always contain at least one character.

# Implicit: 

# --------------------------EXAMPLES-------------------------a
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
# ----------------------------ALGO---------------------------
# define an object with the three keys
spplit the string into an array of characters
iterate over the array
if the character is alphabetic and lowercase add one to the value of lowercase key
if the character is alphabetic and uppercase add one to the value of uppercase key
if it's neither add one to the value of the neither key

use string.length to determine the percentages of each object key
use str.toFixed to get the correct dp

retrun the obj
*/
function letterPercentages(str) {
  let letterObj = {lowercase: 0, uppercase: 0, neither: 0}
  let arr = str.split('')
  arr.forEach(char => {
    if(!char.match(/[^a-z]/gi) && char === char.toLowerCase()) {
      letterObj['lowercase'] += 1;
    } else if (!char.match(/[^a-z]/gi) && char === char.toUpperCase()) {
      letterObj['uppercase'] += 1;
    } else {
      letterObj['neither'] += 1;
    }
  })
  let length = str.length
  letterObj.lowercase = ((letterObj.lowercase/ length)*100).toFixed(2)
  letterObj.uppercase = ((letterObj.uppercase/ length)*100).toFixed(2)
  letterObj.neither = ((letterObj.neither/ length)*100).toFixed(2)
  console.log(letterObj)
}
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }