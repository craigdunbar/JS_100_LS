// What Will This Do?

// What will the following code log?

class Something {
  constructor() {
    this.data = "Hello";
  }

  dupData() {
    return this.data + this.data;
  }

  static dupData() {
    return "ByeBye";
  }
}

let thing = new Something();
console.log(Something.dupData()); // logs ByeBye since static method
console.log(thing.dupData()); // logs HelloHello since instance method

// Our code first creates a Something object, and then logs the result of Something.dupdata, 
// and then thing.dupdata.  
// The former invocation calls the static method (dupdata), 
// and so logs "ByeBye". 
// The latter invocation calls the instance method, 
// and so prints "HelloHello".