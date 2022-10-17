/*
# -----------------------INSTRUCTIONS------------------------
Longest vowel chain
The vowel substrings in the word codewarriors are o,e,a,io. 
The longest of these has a length of 2. 
Given a lowercase string that has alphabetic characters 
only (both vowels and consonants) and no spaces, 
return the length of the longest vowel substring. 
Vowels are any of aeiou.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: integer representing longest vowel chain
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
(solve("codewarriors"),2);
(solve("suoidea"),3);
(solve("ultrarevolutionariees"),3);
(solve("strengthlessnesses"),1);
(solve("cuboideonavicuare"),2);
(solve("chrononhotonthuooaos"),5);
(solve("iiihoovaeaaaoougjyaw"),8);
# ----------------------------ALGO---------------------------
# create a new string from the given string with all the consonants rempved
the spilt this new string into an array of strings
iterate over the array and map a new array with the lengths of the strings
sort this string into descending order and return the integer at arr[0]
*/
function solve(str) {
  let newStr = str.replace(/[^aeiou]/gi, ' ');
  let arr = newStr.split(' ');
  let numArr = arr.map(el => el.length).sort((a, b) => b - a);
  return numArr[0];
}
console.log(solve("codewarriors")) //,2);
console.log(solve("suoidea")) //,3);
console.log(solve("ultrarevolutionariees")) //,3);
console.log(solve("strengthlessnesses")) //,1);
console.log(solve("cuboideonavicuare")) //,2);
console.log(solve("chrononhotonthuooaos")) //,5);
console.log(solve("iiihoovaeaaaoougjyaw")) //,8);