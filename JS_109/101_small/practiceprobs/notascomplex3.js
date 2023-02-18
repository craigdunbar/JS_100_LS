/*
# -----------------------INSTRUCTIONS------------------------
Write a function that will find all the anagrams of a word from a list. 
You will be given two inputs a word and an array with words. 
You should return an array of all the anagrams or an empty array if there are none.

# --------------------------PROBLEM--------------------------

# Input: string and array
# Output: array of anagrams
# ---------------------------RULES---------------------------
# Explicit: return an array or an empty array

# Implicit: 

# --------------------------EXAMPLES-------------------------
'abba', ['aabb', 'abcd', 'bbaa', 'dada'])) //=> ['aabb', 'bbaa']
abba => aabb

# ----------------------------ALGO---------------------------
to determine the anagram, sort the word into ascending order

define an empty array
iterate over the array and sort each word
cmpare to the given string
if the same add to an empty array
else continue
*/
function anagrams(str, arr) {
  let newArr = [];
  sortedStr = str.split('').sort().join('')
  arr.forEach(word => {
    if (word.split('').sort().join('') === sortedStr) {
      newArr.push(word)
    }
  })
  return newArr;
}
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) //=> ['aabb', 'bbaa']
  console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])) //=> ['carer', 'racer']
  console.log(anagrams('laser', ['lazing', 'lazy',  'lacer'])) //=> []