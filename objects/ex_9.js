// vice versa 
let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
console.log(Object.fromEntries(nestedArray));
// or from LS solution
let person = {};

  for (let i = 0; i < nestedArray.length; i ++) {
    let pair = nestedArray[i];

    person[pair[0]] = pair[1];
  }
