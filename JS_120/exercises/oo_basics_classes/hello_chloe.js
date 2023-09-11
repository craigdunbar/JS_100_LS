// Using the following code, add an instance method named rename 
// that renames kitty when invoked.

class Cat {
  constructor(name) {
    this.name = name;
  }
  
  rename(nextName) {
    this.name = nextName;
  }
}

let kitty = new Cat('Sophie');
console.log(kitty.name); // Sophie
kitty.rename('Chloe');
console.log(kitty.name); // Chloe

// In the solution, rename accepts one argument, which represents a new name. 
// To rename kitty, we just need to reassign property name to the value 
// provided by the argument.