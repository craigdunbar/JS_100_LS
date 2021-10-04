// convert an object to a nested array

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33,
};
let nestedPerson = Object.entries(person);
console.log(nestedPerson);