// odd lists
// write a function that has an array arguement
// create a new array
// this should contain only the odd elements
// of the original array

function oddities(arr) {
  newArr = []
  for (let count = 0; count < arr.length; count += 2){
    newArr.push(arr[count]);
  }
  return newArr
}

// further exploration
function evens(arr) {
  newArr = [];
  for(el in arr) {
    if (el % 2 !== 0) {
      newArr.push(arr[el]);
    }
  }
  return newArr;
}

console.log((oddities([2, 3, 4, 5, 6]))); // === [2, 4, 6]);
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

console.log(evens(([2, 3, 4, 5, 6]))); 
console.log(evens([1, 2, 3, 4, 5, 6]));
console.log(evens(["abc", "def"]));
console.log(evens([123])); 
console.log(evens([]));