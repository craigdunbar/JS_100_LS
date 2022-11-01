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

# ----------------------------ALGO---------------------------
# creat an array of letters 
iterate over the given array
for each word split the word into array of chars
for each char compare the current index to the index of the character in the letters array
if they match add one to a counter
once all chars have been checked 
push the counter value to a new array
once all words have been checked
return the array
*/
function solve(arr) {
  let countArr = [];
  let lettersArr = Array.from('abcdefghijklmnopqrstuvwxyz');
  arr.forEach(word => {
    let counter = 0;
    word.split('').forEach((char, idx) => {
      if (idx === lettersArr.findIndex(el => el === char.toLowerCase())) {
        counter += 1;
      }
    })
    countArr.push(counter)
  })
return countArr;
}

console.log(solve(["abode","ABc","xyzD"])) //,[4,3,1]);
console.log(solve(["abide","ABc","xyz"])) //,[4,3,0]);
console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"])) //,[6, 5, 7]);
console.log(solve(["encode","abc","xyzD","ABmD"])) //,[1, 3, 1, 3]);