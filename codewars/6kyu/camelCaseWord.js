// Write simple .camelCase method camelCase in Java) for strings. 
// All words must have their first letter capitalized without spaces.

// input: String
// output : camelCase string

/*
generate an empty string
split the given string into array of words
iterate over the array

every other word should be capitalized
add to the empty string
*/

function camelCase(str) {
  return str.split(' ').map(word =>{
    return word = word[0].toUpperCase() + word.slice(1)
  }).join('')
}

console.log(camelCase("hello case"))
console.log(camelCase("camel case word"))

// "hello case"=> HelloCase
// "camel case word"=> CamelCaseWord
