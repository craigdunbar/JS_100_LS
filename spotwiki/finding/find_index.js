// Create a function that takes two arguments: 
// an array of different elements and a number. 
// The function should return an index's number 
// of that number in the array and false if the number doesn't exist in the array

function findMe(arr, num) {
  let idx = arr.indexOf(num)
  return idx > 0 ? idx : false
}

console.log(findMe([5, null, undefined, 0, '11', 11, {'11':11}, [11, '11']], 11));// 5
console.log(findMe([5, null, undefined, 0, '11', {'11':11}, [11, '11']], 11)) //false
