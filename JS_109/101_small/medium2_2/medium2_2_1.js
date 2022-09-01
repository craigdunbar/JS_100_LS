/*
# -----------------------INSTRUCTIONS------------------------
Lettercase Percentage Ratio
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither

# --------------------------PROBLEM--------------------------

# Input: string
# Output: object
# ---------------------------RULES---------------------------
# Explicit: You may assume that the string will always contain at least one character

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
# ----------------------------ALGO---------------------------
initalise an with keys lower upper and neither all assigned empty string values
define and initlaise three variable lowercase, uppercase, and neither
# given the string argument split the string into an array of characters
iterate over the array of character
for each character check to see if the character is alphabetic
if not add one to the neither variable
else check if the character is equal to the character converted to lowercase
if so add one to lowercase variable
else add one to uppercase variable
calculate the percentages of each and add these to the objects values as strings
return the object
*/
function letterPercentages(str) {
  let obj = {lowercase: '', uppercase: '', neither: ''}
  let lower = 0;
  let upper = 0;
  let neither = 0;
  str.split('').forEach(char => {
    if (!char.match(/[a-z]/gi)) {
      neither += 1;
    } else if (char === char.toLowerCase()) {
      lower += 1;
    } else {
      upper += 1;
    }
  })
  obj.lowercase = (((lower/ str.length)*100).toFixed(2))
  obj.uppercase = (((upper/ str.length)*100).toFixed(2))
  obj.neither = (((neither/ str.length)*100).toFixed(2))
  return obj;
}
console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }