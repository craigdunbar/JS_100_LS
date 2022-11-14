// Create a function that takes an array of numbers 
// as an argument and returns a number that is missing 
// in the specific sequence. 
// Return false if there is no missing elements.

function findMissing(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] !== arr[i] + 1) {
      return arr[i] + 1;
    }
  }
  return false;
}
console.log(findMissing([0,1,2,3,5,6,7])); //4
console.log(findMissing([100, 101, 102, 103, 104, 106, 107])); //105
console.log(findMissing([34, 35, 36, 37, 38, 39])); //false