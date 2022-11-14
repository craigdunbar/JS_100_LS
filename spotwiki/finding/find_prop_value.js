// Create a function that takes two arguments: an object 
// containing several properties and an array and 
// returns true if any of the object's values looks like the 
// array passed as an argument. 
// Note that it doesn't have to be the same array in terms of the 
// place in the memory. They just have to have the same primitive 
// values as arguments. 
// Return false otherwise. 

// create an array of the object values.
// check these values against the given array using non-strict equality

function findMe(obj, arr) {
  let valuesArr = Object.values(obj);
  for (let i = 0; i < valuesArr.length; i++) {
    if (valuesArr[i][0] === arr[0] && valuesArr[i][1] === arr[1]) {
      return true;
    }
  }
  return false;
}

console.log(findMe({'prop1': [1, '2'], 'prop2': 1, 'prop3': [1,2]}, [1, 2])); //true
console.log(findMe({'prop1': [1, '2'], 'prop2': 1, 'prop3': [2, 1]}, [1, 2])); //false
