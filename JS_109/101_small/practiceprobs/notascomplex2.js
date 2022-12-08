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
# 
define an new array
to determine if two words are annagrams
sort the word into ascending order and compare them
so given the string argument, sort it and then 
iterate over the array, sorting each word
if the sorted word === string argument 
push the unsorted word to the new array

return the new array
*/
function anagrams(str, arr) {
  let newArr = [];
  str = str.split('').sort().join('');
  arr.forEach(word => {
    let sortedWord = word.split('').sort().join('');
    if (sortedWord === str) {
      newArr.push(word);
    }
  })
  return newArr;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) //=> ['aabb', 'bbaa']
  console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])) //=> ['carer', 'racer']
  console.log(anagrams('laser', ['lazing', 'lazy',  'lacer'])) //=> []