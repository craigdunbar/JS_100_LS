// Create a function that takes an array and a number as arguments and return 
// an array containing all the elements that appears in the array as 
// many times as the second argument.

// iterate over the array and then use filter and length to check the number of 
// occurences
// if the elment occurs num times add it to a new array

function extractEl(arr, num) {
  let newArr = [];
  arr.forEach(el => {
    if (arr.filter(val => val === el).length === num) {
newArr = newArr.concat(el)
    }
  });
  return newArr;
}

console.log(extractEl(['a', 1, 'A', 'a', 'a', '111', 1, 1], 3)) //; ['a', 'a', 'a', 1, 1, 1];
