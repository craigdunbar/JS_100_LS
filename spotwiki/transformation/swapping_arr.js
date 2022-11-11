// Create a function that takes an array as an argument 
// and returns an array with all the pair elements swapped. 
// So the elements with index 0 will swap the place 
// with element with index 1, the elements with index 2 
// will swap place with element number 3, and so on. 

// create a loop from 0 to arr.length
// on each iteration swap the current element with the
// element at index + 1

function swapIt(arr) {
  for (let i = 0; i < arr.length; i += 2) {
    let current = arr[i]
    let next = arr[i + 1]
    arr[i] = next;
    arr[i+1]= current
  }
  return arr;
}
console.log(swapIt(['a', 0, undefined, [], NaN, {1:2}]));//[0, 'a', [], undefined, {1:2}, NaN]
