// Create a function that takes an array and a string as arguments 
// and return an array with the second string removed 
// as elements of the first array argument

// create an empty array
// iterate over the array 
// if the current element === str skip it
// else push element to new array

function removeIt(arr,str) {
  let newArr = [];
  arr.forEach(el => {
    if (el !== str) {
      newArr.push(el);
    }
  })
  return newArr;
}
console.log(removeIt(['a', 0, undefined, 'aa', 'a', 'A', []], 'a'))
;//[ 0, undefined, 'aa', 'A', []]
