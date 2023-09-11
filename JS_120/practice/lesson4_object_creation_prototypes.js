// Q1
// Use factory function to create pet objects.
// The code below should work

function createPet(animal, name) {
  return {
    animal: animal,
    name: name,

    sleep: function() {
      console.log(`I am sleeping`);
    },

    wake: function() {
      console.log(`I am awake`);
    },
  };
}

let pudding = createPet('Cat', 'Pudding');
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake(); // I am awake

let neptune = createPet("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}`);
neptune.sleep() // I am sleeping
neptune.wake() // I am awake

console.log(Object.getOwnPropertyNames(neptune))


//Q2
// Use the OLOO pattern to create an object prototype that we can use to create pet objects.

// let PetPrototype = {
//   sleep: function() {
//     console.log(`I am sleeping`);
//   },

//   wake: function() {
//     console.log(`I am awake`);
//   },

//   init(animal, name) {
//     this.animal = animal;
//     this.name = name;
//     return this;
//   },
// }

// let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
// console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
// pudding.sleep(); // I am sleeping
// pudding.wake(); // I am awake

// let neptune = Object.create(PetPrototype).init("Fish", "Neptune");
// console.log(`I am a ${neptune.animal}. My name is ${neptune.name}`);
// neptune.sleep() // I am sleeping
// neptune.wake() // I am awake

// console.log(Object.getOwnPropertyNames(neptune))
//Q3
// How do the objects created in the last 2 questoins differ?
// In the first method the objects have defined properties for all the properties and methods whereas
// the objects created in the second part have inherited the methods from the prototype object and only
// have 'own' properties for animal and name.
// The second method is more efficient as it uses less memory to generate the objects.