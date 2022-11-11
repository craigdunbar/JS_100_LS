// Create a function that takes two arguments: an array with elements 
// and another element, which can be any primitive data type, 
// and return the same array with the second argument of the function, 
// removed from that array

// use findIndex to get the index of the num given as the second argument
// use splice to remove that idx from the array

function removeEl(arr, num) {
  let idx = arr.findIndex(el => el === num);
  arr.splice(idx,1);
  return arr;
}

let arr = [1,2,3];
let arr3 = removeEl(arr, 2); //[1, 3]
console.log(arr === arr3) //true

