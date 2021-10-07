// welcome stranger
// write a function that has an array and object as arguments
// use string lieral to greet the person
// with full name and title

// function greetings(array, object) {
//   return (`Hello ${array[0]} ${array[1]} ${array[2]}! Nice to have a ${object.title} ${object.occupation} around.`);
// }
// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );

// refactored
function greetings(array, object) {
  return (`Hello ${array.join(' ')}! Nice to have a ${object.title} ${object.occupation} around.`);
}
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);