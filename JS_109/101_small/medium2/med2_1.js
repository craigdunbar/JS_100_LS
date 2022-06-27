/*
# -----------------------INSTRUCTIONS------------------------
Lettercase Percentage Ratio
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither

# --------------------------PROBLEM--------------------------

# Input: string
# Output: object with percentages expressed as strings
# ---------------------------RULES---------------------------
# Explicit: You may assume that the string will always contain at least one character.

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
# initialise 3 counter: uppercase, lowercase and neither
initalise an empty object
iterate over the string and check each charater to see if it's lower, upper or neither
add one to the relevant counter
determine the percentages as the counter value/ overall characters in the string
assign this result to the relevant object key=> lower, upper and neither
*/
function letterPercentages(str) {
  let percentObj = {};
  let lowercase = 0;
  let uppercase = 0;
  let neither = 0;
  
  for (let char of str) {
    if (char.match(/[^a-z]/gi)) {
      neither += 1;
    }
    else if (char === char.toLowerCase()) {
      lowercase += 1;
    } else {
      uppercase += 1;
    }
  }
  percentObj['lowercase'] = ((lowercase/ str.length) * 100).toFixed(2);
  percentObj['uppercase']= ((uppercase/ str.length) * 100).toFixed(2);
  percentObj['neither']= ((neither/str.length) * 100).toFixed(2);
  return percentObj;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }