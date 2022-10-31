/*
# -----------------------INSTRUCTIONS------------------------
Mexican wave
In this simple Kata your task is to create a function 
that turns a string into a Mexican Wave. 
You will be passed a string and you must return that string 
in an array where an uppercase letter is a person standing up. 

# --------------------------PROBLEM--------------------------

# Input: string
# Output: array
# ---------------------------RULES---------------------------
# Explicit:  1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as 
 if it was an empty seat

# Implicit: 

# --------------------------EXAMPLES-------------------------
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

# ----------------------------ALGO---------------------------
#  define an empty array
initalise a loop from 0 to str.length
on each iteration use slice() and the current idx to replace
the char with an uppercase char
- if char is a space skip it
push the new word to the array
return the array
*/
function wave(str) {
  let wordsArr = [];
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === ' ') continue;

    let upper = char.toUpperCase();
    let newWord = str.slice(0, i).concat(upper).concat(str.slice(i + 1))
    wordsArr = wordsArr.concat(newWord);
  }
  return wordsArr;
}
console.log(wave("hello"));
// result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
console.log(wave("codewars"));
// result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
console.log(wave(""));
// result = [];
console.log(wave("two words"));
// result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
console.log(wave(" gap "));
// result = [" Gap ", " gAp ", " gaP "];
