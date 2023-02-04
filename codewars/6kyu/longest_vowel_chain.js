/*
# -----------------------INSTRUCTIONS------------------------
The vowel substrings in the word codewarriors are o,e,a,io. 
The longest of these has a length of 2. Given a lowercase string 
that has alphabetic characters only (both vowels and consonants) 
and no spaces, return the length of the longest vowel substring. 
Vowels are any of aeiou. 

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------

codewarriors are o,e,a,io. 
# ----------------------------ALGO---------------------------
# 24 

replace any char that's not a vowell with a space
split the sting into an array
define a counter = 0
define a variable called longest
iterate over the array and get the length of each el
if length is > counter counter = length
longest = element
return the longest element
*/
function solve(str) {
  let count = 0;
  str = str.replace(/[^aeiou]/gi, ' ')
  str.split(' ').forEach(el => {
    el.length > count ? count = el.length : count;
  })
  return count
}


console.log(solve("codewarriors")) //,2);
console.log(solve("suoidea")) //,3);
console.log(solve("ultrarevolutionariees")) //,3);
console.log(solve("strengthlessnesses")) //,1);
console.log(solve("cuboideonavicuare")) //,2);
console.log(solve("chrononhotonthuooaos")) //,5);
console.log(solve("iiihoovaeaaaoougjyaw")) //,8);