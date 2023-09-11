// Q2
class Televison {
  static manufacturer() {
    // code onitted
  }

  model() {
    // method logic
  }
}
// What does the static modifier do? How would we call the method manufacturer
// The static modifier means the method is defined in the constructor and not the instance objects the class
// creates
// We would call the manufacturer method using the class name :
// Televison.manufacturer()

// THe model method is an instance method and must be called on by an instance object:

let tv = new Television();
tv.model();