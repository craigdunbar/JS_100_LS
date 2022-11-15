// Create a function that takes an array with numbers 
// and returns a number that is the lowest 
// number in that array. 

// use sort to get ascending order and return the first Elementof use Math.min

function lowest(arr) {
  // return arr.sort((a, b) => a - b)[0]
  return Math.min(...arr)
}

console.log(lowest([1,3,4,6,11,9,0,1])); //0
console.log(lowest([5,6,3,4,8,1])); //1


// Create a function that takes an array with numbers 
// and returns a number that is the highest number 
// in that array

function highest(arr) {
  return Math.max(...arr)
}
console.log(highest([1,2,4,66,2224, 189, 0])); //2224
console.log(highest([3,222,156,109, 999, 1])); //999
