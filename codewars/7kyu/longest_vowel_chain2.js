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
  assert.strictEqual(solve("codewarriors"),2);
    assert.strictEqual(solve("suoidea"),3);
    assert.strictEqual(solve("ultrarevolutionariees"),3);
    assert.strictEqual(solve("strengthlessnesses"),1);
    assert.strictEqual(solve("cuboideonavicuare"),2);
    assert.strictEqual(solve("chrononhotonthuooaos"),5);
    assert.strictEqual(solve("iiihoovaeaaaoougjyaw"),8);

# ----------------------------ALGO---------------------------
use repace to remove any consonants
split the string into an array of words using the spaces as delimeiter
iterate over the array and for each elment count how many chars
increase a counter if the current number is greater than the counter
return the counter
*/
function solve(str) {
  let count = 0;
  let newStr = str.replace(/[^aeiou]/gi, " ")
  newStr.split(' ').forEach(el => {
    if (el.length > count) {
      count = el.length
    }
  });
  return count;
}
console.log(solve("codewarriors")) //,2);
console.log(solve("suoidea")) //,3);
console.log(solve("ultrarevolutionariees")) //,3);
console.log(solve("strengthlessnesses")) //,1);
console.log(solve("cuboideonavicuare")) //,2);
console.log(solve("chrononhotonthuooaos")) //,5);
console.log(solve("iiihoovaeaaaoougjyaw")) //,8);