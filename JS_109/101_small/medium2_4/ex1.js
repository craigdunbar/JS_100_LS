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
define an object with the 3 types of letters as keys and values of 0
split the string into an array of characters
create 3 variables with the same names as the keys
ceate a variable to count the length of the string
iterate over the string
if the string is lowercase add one to the lower variable
if uppercase add one to upper
and is neither add one to neither
calculate the percentages as count / string length
use to Fixed() to get the 2dp string 
assign to the correct object key
return the object
*/
function letterPercentages(str) {
  let obj = {lowercase: 0, uppercase: 0, neither: 0}
  let length = str.length
  let lower = 0
  let upper = 0
  let neither = 0

  str.split('').forEach(el => {
    if (el.match(/[^a-z]/gi)){
      neither += 1
    } else if (el.toLowerCase() === el) {
      lower += 1;
    } else if (el.toUpperCase() === el) {
      upper += 1;
    }
  })
  obj.lowercase = ((lower/ length)* 100).toFixed(2);
  obj.uppercase = ((upper/length)*100).toFixed(2);
  obj.neither = ((neither/ length)*100).toFixed(2);
  // console.log(lower, upper, neither)
  console.log(obj)
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }