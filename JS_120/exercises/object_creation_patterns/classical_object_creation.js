// Below is the pseudo classical approach:

function Person (first, last, age, gender) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
    return `${this.firstName} ${this.lastName}`
}

Person.prototype.communicate = function() {
  console.log('Communicating');
}

Person.prototype.eat = function() {
  console.log('Eating');
}

Person.prototype.sleep = function() {
  console.log('Sleeping');
}

function Doctor(first, last, age, gender, specialization) {
  Person.call(this, first, last, age, gender);
  this.specialization = specialization;
}

Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.diagnose = function() {
  console.log('Diagnosing');
}
Doctor.prototype.constructor = Doctor;

function Professor(first, last, age, gender, subject) {
  Person.call(first, last, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.teach = function() {
  console.log('Teaching');
}
Professor.prototype.constructor = Professor;

function Student(first, last, age, gender, degree) {
  Person.call(this, first, last, age, gender, degree);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.study = function() {
  console.log('Studying');
}
Student.prototype.constructor = Student;

function GraduateStudent(first, last, age, gender, degree, gradDegree) {
  Student.call(this, first, last, age, gender, degree, gradDegree)
  this.gradDegree = gradDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.research = function() {
  console.log('Researching');
}
GraduateStudent.prototype.constructor = GraduateStudent;

let person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

let doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

let graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'


// The solution is a bit long, but it's not complicated. The points to note are the following:

// - Use of `Function.prototype.call` to have the subclass "inherit" properties from the parent class.
// - Use of `Function.prototype = Object.create(obj)` to "inherit" methods from the parent class.
// - Use of `Function.prototype.constructor` to manually reset the property to point back to the appropriate constructor.


// Below is the solution using classes:

// class Person {
//   constructor(first, last, age, gender) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.gender = gender;
//   }

//   fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   communicate() {
//     console.log("Commmunicating");
//   }

//   eat() {
//     console.log("Eating");
//   }

//   sleep() {
//     console.log("Sleeping");
//   }
// }

// class Doctor extends Person {
//   constructor(first, last, age, gender, specialization) {
//     super (first, last, age, gender);
//     this.specialization = specialization;
//   }
//   diagnose() {
//     console.log("Diagnosing");
//   }
// }

// class Student extends Person {
//   constructor(first, last, age, gender, degree) {
//     super (first, last, age, gender);
//     this.degree = degree;
//   }

//   study() {
//     console.log("Studying");
//   }
// }

// class GraduateStudent extends Student {
//   constructor (first, last, age, gender, degree, gradDegree) {
//     super (first, last, age, gender, degree);
//     this.graduateDegree = gradDegree;
//   }

//   research() {
//     console.log('Researching');
//   }
// }

// let person = new Person('foo', 'bar', 21, 'gender');
// console.log(person instanceof Person);     // logs true
// person.eat();                              // logs 'Eating'
// person.communicate();                      // logs 'Communicating'
// person.sleep();                            // logs 'Sleeping'
// console.log(person.fullName());            // logs 'foo bar'

// let doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
// console.log(doctor instanceof Person);     // logs true
// console.log(doctor instanceof Doctor);     // logs true
// doctor.eat();                              // logs 'Eating'
// doctor.communicate();                      // logs 'Communicating'
// doctor.sleep();                            // logs 'Sleeping'
// console.log(doctor.fullName());            // logs 'foo bar'
// doctor.diagnose();                         // logs 'Diagnosing'

// let graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// // logs true for next three statements
// console.log(graduateStudent instanceof Person);
// console.log(graduateStudent instanceof Student);
// console.log(graduateStudent instanceof GraduateStudent);
// graduateStudent.eat();                     // logs 'Eating'
// graduateStudent.communicate();             // logs 'Communicating'
// graduateStudent.sleep();                   // logs 'Sleeping'
// console.log(graduateStudent.fullName());   // logs 'foo bar'
// graduateStudent.study();                   // logs 'Studying'
// graduateStudent.research();                // logs 'Researching'