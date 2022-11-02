/*
# -----------------------INSTRUCTIONS------------------------
Write a function that will convert a string into title case, 
given an optional list of exceptions (minor words). 
The list of minor words will be given as a string with each word separated by a space. 
Your function should ignore the case of the minor words string -- 
it should behave in the same way even if the case of the minor word string is changed.

First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always 
be lowercase except for the first word in the string. 

The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
# --------------------------PROBLEM--------------------------
# Input:

# Output:

# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
'a clash of KINGS', 'a an the of // A Clash of Kings'
words should be cpaitalized unless they are soecifically referenced in the second str
# -----------------ALGO and Data Structure ------------------
creat an empty array
split str1 into an array of words
spilt str2 into an array of words

iterate over str 1 
if the current word is not included in the second str 
- then capitalize the string 
else the string should be lowercase

add the words to the new array
return the array joined 
*/
function titleCase(str1, str2) {
  // let newArr = [];
  let arr1 = str1.split(' ');
  let arr2 = str2.split(' ');
 console.log(arr2)
  let newArr = arr1.map((word, idx) => {
    if (idx !== 0 && arr2.includes(word)) {
      return word.toLowerCase();
    } else if (idx >=1 && arr2.includes(word)) {
      return word.toLowerCase();
    } else {
     return word[0].toUpperCase().concat(word.slice(1).toLowerCase())
    }
    // newArr = newArr.concat(word)
  })
  return newArr.join(' ');
}
console.log(titleCase('a clash of KINGS', 'a an the of')) // should return: 'A Clash of Kings'
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')) // should return: 'The Wind in the Willows'
// console.log(titleCase('the quick brown fox')) // should return: 'The Quick Brown Fox'
// console.log(titleCase('')) // '')