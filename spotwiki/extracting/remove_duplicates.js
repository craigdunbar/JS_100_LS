// Create a function that takes an array as argument and 
// returns  a new array with all the elements that appears 
// more than once removed

// use new Set to remove the duplicates

function removeDuplicate(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicate([1, 2, 3, 5, 2, 1, 5, 2 ])); //=> [1, 2, 3, 5];
