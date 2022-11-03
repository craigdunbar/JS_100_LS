/*
# -----------------------INSTRUCTIONS------------------------

Create a function that takes a string as an argument and returns 
a number of words in that string

Further:
Create a function that takes a string as an argument and returns 
an object containing all of the words from the string and count 
occurrences of that word.
# --------------------------PROBLEM--------------------------

# Input: string
# Output: first integer / scond obj
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
countWords('hello world'); // => 2

countWords('Hello, hello wolrd'); // => {'hello' : 2, 'world' : 1};

# ----------------------------ALGO---------------------------
# split the string into an array of words and get the length

further: 
define an empty object
remove any non alphabetic characters 
split the sting into an array of words
iterate over the array 
change word to lowercase
if the current word is already a key add one to the value 
else create the key with a value of one
*/
function countWords(str) {
  // return str.split(' ').length;

  // Further:
  let obj = {};
  str = str.replace(/[^a-z]/gi, ' ').replace(/\s+/, ' ')
  console.log(str)
  str.split(' ').forEach(word => {
    word = word.toLowerCase();
    obj[word] ++ || (obj[word] = 1);
  })
return obj
}


// console.log(countWords('hello world')); // => 2
console.log(countWords('Hello, hello world')); // => {'hello' : 2, 'world' : 1};