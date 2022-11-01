/*
# -----------------------INSTRUCTIONS------------------------
The vowel substrings in the word codewarriors are o,e,a,io. 
The longest of these has a length of 2. 
Given a lowercase string that has alphabetic characters 
only (both vowels and consonants) and no spaces, 
return the length of the longest vowel substring. Vowels are any of aeiou. 

# --------------------------PROBLEM--------------------------

# Input: string
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------


# ----------------------------ALGO---------------------------
# use replace to remove all the consonents for spaces
split the string by spaces
iterate over the array of vowels and find the largest one
*/
function solve(str) {
  let vowelsArr = str.replace(/[^aeiou]/gi , ' ').split(' ')
  let counter = 0;
  vowelsArr.forEach(el => {
    el.length > counter ? counter = el.length : counter
  })
  return counter
}
console.log(solve("codewarriors")) //,2);
console.log(solve("suoidea")) //,3);
console.log(solve("ultrarevolutionariees")) //,3);
console.log(solve("strengthlessnesses")) //,1);
console.log(solve("cuboideonavicuare")) //,2);
console.log(solve("chrononhotonthuooaos")) //,5);
console.log(solve("iiihoovaeaaaoougjyaw")) //,8);