// Create a function that takes an object as an argument 
// and return an array containing elements that exist in 
// the argument object more than once as values. 
// Note that the elements have to be the same elements 
// (represented by the same place in the memory). 

// create an array of the object values.
// iterate over this array and filter again for each Element
// if this second filtered array has length greater than 1 
// push the current element to a new array

function findDuplicates(obj) {
  let dupArr = [];
  let valuesArr = Object.values(obj);
  valuesArr.forEach(el => {
    if (valuesArr.filter(val => val === el).length > 1 && !dupArr.includes(el)) {
      dupArr.push(el)
    }
  })
  console.log(dupArr)
}
findDuplicates({1:1, 2:2, 'a':1, 'b':2, 'c': '1', 'd':11}); //[1,2];
findDuplicates({1:1, 2:'abcd', 3:undefined, 4:'1'}); //[];
