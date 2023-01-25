/*
# -----------------------INSTRUCTIONS------------------------
Consider the word "abode". 
We can see that the letter a is in position 1 and b is in position 2. 
In the alphabet, a and b are also in positions 1 and 2. 
Notice also that d and e in abode occupy the positions they would occupy in the alphabet, 
which are positions 4 and 5.

Given an array of words, return an array of the number of 
letters that occupy their positions in the alphabet for each word. For example,


# --------------------------PROBLEM--------------------------

# Input: array of strings
# Output: array
# ---------------------------RULES---------------------------
# Explicit: Input will consist of alphabet characters, 
both uppercase and lowercase. No spaces.

# Implicit: 

# --------------------------EXAMPLES-------------------------
solve(["abode","ABc","xyzD"]) = [4, 3, 1]

ALGO ---------------
using charCodes 'a' is 97
so if we iterate over the string and compare the index number to the charcode 
we can determine which ones are in the correct location

ie b at index 1 has charcode of 98 which is 97 + 1
d at index 3 should be char code 100

define a counter with value of 0
define an empty array
iterate over the given Array
split the string into an array of chars 
iterate over the chars array
comapre each char index to the char code
if they are equal add one to the counter
push the counter to a new array

*/
function solve(arr) {
  let newArr = [];

  arr.forEach(el => {
    let count = 0;
    el.split('').forEach((char, idx) => {
      if (char.toLowerCase() === String.fromCharCode((97 + idx))) {
        count += 1;
      }
    })
    newArr.push(count)
  })
  return newArr;
}
console.log(solve(["abode","ABc","xyzD"])) // = [4, 3, 1]
console.log(solve(["abide","ABc","xyz"])) //,[4,3,0]);
console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"])) //,[6, 5, 7]);
console.log(solve(["encode","abc","xyzD","ABmD"])) //,[1, 3, 1, 3]);