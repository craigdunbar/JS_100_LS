// ex1
// What do we mean when we say that classes are first-class values?
// they can be passes into fuctions as arguments, returned
// from functiouns and assigned to variables.

// ex2
class Television {
  static manufacturer() {
    // omitted code
  }

  model() {
    // method logic
  }
}
// What does the static modifier do? 
// How would we call the method manufacturer?
// The static modifier, when used with a method declaration, marks the method as static. That is, the method is defined directly on the class, not on the objects the class creates. 
// We use it like this:
// Television.manufacturer();

// The model method, on the other hand, is an instance method and must be called by an instance object
// let tv = new Television();
// tv.model();