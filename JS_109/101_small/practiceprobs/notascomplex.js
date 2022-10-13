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
deinfe an empty array to hold the anagrams
sort the string argument into ascending order
iterate over the array of words
sort each word into ascending order
compare each character to the characters of the given string
if each character is the same add the word to the anagrams array

*/

function anagrams(str, arr) {
  let anagramsArr = [];
  let sortedWord= str.split('').sort().join('');
 
  for (let i = 0; i < arr.length; i++) {
    let currentWord = arr[i]
    let currentSorted = currentWord.split('').sort().join('');
    
      if (currentSorted === sortedWord) {
        anagramsArr = anagramsArr.concat(currentWord)
      }
  }
  return anagramsArr;
}

  console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) //=> ['aabb', 'bbaa']
  console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])) //=> ['carer', 'racer']
  console.log(anagrams('laser', ['lazing', 'lazy',  'lacer'])) //=> []