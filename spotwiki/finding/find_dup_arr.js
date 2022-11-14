// Create a function that takes an array as an argument and 
// returns another array containing all elements of the argument 
// array that appears more than once, 
// Note that the elements have to be the same elements 
// (represented by the same place in the memory)

// since we are looking for the same place in memory we 
// only want primitive values
// iterate over the array and create another array of only primitive values
// then assign the values to keys in an object increase the values if there
// is more than one occurence.
// return an array of the keys woth value greater than 1

function findDuplicates(arr) {
  let seenObj = {};
  let primitiveArr = arr.filter(el => typeof(el) !== 'object');
  
  if ([...new Set(primitiveArr)].length === primitiveArr.length) {
    return false;
  } 

  primitiveArr.forEach(el => {
    if (!Object.keys(seenObj).includes(String(el))) {
      seenObj[el] = 1;
    } else {
      seenObj[el] += 1;
    }
  })
  return Object.keys(seenObj).filter(key => seenObj[key] > 1)
}

console.log(findDuplicates([1, 1, [], [], {1:1}, {1:1}, 'hello', undefined])); //[1]
console.log(findDuplicates([1, 2, 3, [], [], null])) //false
