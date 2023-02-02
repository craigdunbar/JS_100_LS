// *You know how sometimes you write the the same word twice in a sentence, 
// but then don't notice that it happened? For example, you've been distracted 
// for a second. Did you notice that "the" is doubled in the first sentence of 
// this description?


// As as aS you can see, it's not easy to spot those errors, 
// especially if words differ in case, like "as" at the beginning of this sentence.


// Write a function that counts the number of sections repeating 
// the same word (case insensitive). 
// The occurence of two or more equal words next after each other counts as one.

// input: str
// output: number

// Algo: 
// // define a counter with a value of 0
// split the string into an array
// use Set to get the unique names
// use filter to get the index of the occurences of the unique names 
// if the indexes are consecutive add one to the counter
// // iterate over the array
// if the current word is the same as the next word 
// increment a counter by 1
// if current word !== next word
// and if counter > 1 then add one to the total 
// make current word the next word and iterate over the 
// remainder of the array
// doing the same as before

function f(str) {
  let arr = str.split(' ')
  let count = 0;
  let total = 0;
  
  for (let i = 0; i < arr.length - 1; i++) {
    currentWord = arr[i]
    nextWord = arr[i + 1]
    if (currentWord.toLowerCase() === nextWord.toLowerCase()) {
      count += 1;
    } else {
      if (count > 0) {
        total += 1;
        count = 0;
      }
    }
  }
  if (count > 0) {
    total += 1;
  }
  return total;
}
console.log(f("dog cat"                 ))// -->  0
console.log(f("dog DOG cat"             ))// -->  1
console.log(f("apple dog cat"           ))//-->  0
console.log(f("pineapple apple dog cat" ))//-->  0
console.log(f("apple apple dog cat"      ))//-->  1
console.log(f("apple dog apple dog cat"  ))//-->  0
console.log(f("dog dog DOG dog dog dog"  ))//-->  1
console.log(f("dog dog dog dog cat cat"  ))//-->  2
console.log(f("cat cat dog dog cat cat"  ))//-->  3