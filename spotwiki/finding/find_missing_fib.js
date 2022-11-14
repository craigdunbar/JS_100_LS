// Create a function that takes an array of numbers 
// as an argument and returns a number that is missing 
// in the specific sequence. Return false if there is no missing elements.

// fibonnaci number is the sum of the two previous numbers, always starts with 1, 1
// to chexk the sequence iterate over the array starting at the 2nd entry
// if the sum of this plus the  previous one !== third entry return the sum
// else if none are missing return false

function findMissingFibo(arr) {
  
  for (let i = 1; i < arr.length - 1; i ++) {
    let sum = arr[i] + arr[i - 1];
    if (arr[i + 1] !== sum) {
      return sum;
    }
  }
  return false;
}
console.log(findMissingFibo([1, 1, 2, 3, 8, 13, 21, 34, 55])) //5
console.log(findMissingFibo([ 8, 13, 21, 34, 55])); //false