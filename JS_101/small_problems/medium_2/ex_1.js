/*
# -----------------------INSTRUCTIONS------------------------
Lettercase percentage Ratio

Write a function that takes a string and returns an object
containing the following three properties.
- the percentage of lowercase letters
- the percentage of uppercase letters
- the percentage of characters that are neither

# --------------------------PROBLEM--------------------------

# Input: string
# Output: object
# ---------------------------RULES---------------------------
# Explicit: return an object with lowercase, uppercase 
            and neither keys.
            Values in object will represent percentages and 
            be 2 decimal points
            Given string will never be empty
            
# Implicit: 

# --------------------------EXAMPLES-------------------------
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
# ----------------------------ALGO---------------------------
# define a funciton with one parameter that will take a string
initalise an object called letterPercent with lowercase, uppercase
and neither keys. All with values of 0
determine the length of the given string
initialise an iteration
iterate through the given string
if the current letter is lowercase add one to the vlaue of lowercase key
if the letter is uppercase add one to the vlaue of uppercase key
if it's neither add one to the value of the neither key
terminate the loop at the last letter of the string

calculate the percentage of each by dividing the value of
each key by the string length multiplying by 100 and 
using Fixed(2) to give the result.

*/
function letterPercentages(string) {
  letterPercent = {lowercase: '', uppercase: '', neither: ''};
  length = string.length;
  
  for (let index = 0; index < length; index++) {
    if (string[index].match(/[^A-za-z]/) !== null) {
      letterPercent.neither += 1
    } else if (string[index] === string[index].toUpperCase()) {
      letterPercent.uppercase += 1;
    } else if (string[index] === string[index].toLowerCase()) {
      letterPercent.lowercase += 1;
    }
  }

  Object.entries(letterPercent).forEach(keyValue => {
    let[key, value] = keyValue
    letterPercent[`${key}`] = ((value/length)*100).toFixed(2)
  });
  console.log(letterPercent);
}
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }