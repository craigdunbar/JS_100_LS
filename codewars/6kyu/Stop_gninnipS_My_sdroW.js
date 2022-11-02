/*
# -----------------------INSTRUCTIONS------------------------
Write a function that takes in a string of one or more words, 
and returns the same string, but with all five or more letter 
words reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. 
Spaces will be included only when more than one word is present.

# --------------------------PROBLEM--------------------------
# Input:

# Output:

# ---------------------------RULES---------------------------
# Explicit: 5 letters or more reverse

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
# -----------------ALGO and Data Structure ------------------
strings and array
define an empty array
split the sting arg into an array of words
iterate over the array
if the current word.lenght >= 5 reverse the letters
push the word to the empty array
else push the word
return the array joined 
*/
function spinWords(str) {
  let newWords = [];
  newWords = str.split(' ').map(word => {
   return  word.length >=5 ? word = word.split('').reverse().join('') : word;
  })
  return newWords.join(' ')
}

console.log(spinWords("Welcome")) //, "emocleW");
console.log(spinWords("Hey fellow warriors"))  //, "Hey wollef sroirraw");
console.log(spinWords("This is a test")) //, "This is a test");
console.log(spinWords("This is another test")) //, "This is rehtona test");
console.log(spinWords("You are almost to the last test"))//, "You are tsomla to the last test");
console.log(spinWords("Just kidding there is still one more"))//, "Just gniddik ereht is llits one more");
console.log(spinWords("Seriously this is the last one"))//, "ylsuoireS this is the last one");