// Create a function that takes a string as an argument 
// and returns an array containing all characters that 
// appear in the strings more than once.

// create an object to count the occurences
// return an array with all charactera that occur more than 1

function findDuplicates(str) {
let seenObj = {};
str.split('').forEach(el => {
  if (!Object.keys(seenObj).includes(el)) {
    seenObj[el] = 1;
  } else {
    seenObj[el] += 1;
  }
})
return Object.keys(seenObj).filter(key => seenObj[key] >= 2)
}
console.log(findDuplicates('kabcdeffghhijk')); //['k', 'f', 'h']
