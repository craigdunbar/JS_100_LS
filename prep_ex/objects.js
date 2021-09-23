// ex_1

// let person = {
//   name: 'Bob',
//   occupation: 'web developer',
//   hobbies: 'painting',
// };
// console.log(person.name)
// console.log(person['name'])

// ex_3

// let myArray = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   length: 3,
// };

// for(let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }

// ex_4
// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// }
// arr = (Object.keys(obj));
// newArray = arr.map(string => string.toUpperCase());
// console.log(newArray);
// console.log(obj);

// // ex_5
// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };
// let myObj = Object.create(myProtoObj);
// // ex_7
// myObj.qux = 3
// // console.log(myObj);
// console.log(Object.keys(myObj));

// ex_8 - REVIEW
// let objToCopy = {
//   foo: 1,
//   bar: 2,
//   qux: 3,
// };
// function copyObj(sourceObject, keys) {
//   let destinationObject = {};

//   if (keys) {
//     keys.forEach(function(key) {
//       destinationObject[key] = sourceObject[key];
//     });

//     return destinationObject;
//   } else {
//     return Object.assign(destinationObject, sourceObject);
//   }
// }

// ex_11
let obj = {
  foo: {a: "hello", b: "world" },
  bar: ["example", "mem", null, {xyz: 6 }, 88],
  qux: [4, 8, 12]
};
obj.bar[3].xyz = 606
console.log(obj);