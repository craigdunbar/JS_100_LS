let dog = {
	name: 'Spot',
	barking: false,
	hungry: false,

	sound() {
		this.dog.barking = true;
	},

	eating() {
		this.dog.hungry = true;
	},
};

let craig = {
  name: 'Craig',
  pet: dog,

  printName() {
    console.log(`My name is ${this.name}!`);
    console.log(`My pet's name is ${this.pet.name}`);
  },
};

craig.printName()