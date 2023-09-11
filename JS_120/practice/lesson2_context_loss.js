// Questoin 1
// The code below should output "Christopher Turk is a Surgeon". 
// Without running the code, what will it output? 
// If there is a difference between the actual and desired output, explain the difference.

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//       return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   }
// };

// function logReturnVal(func) {
//   let returnVal = func();
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription); // logs undefined undefined is a undefined
// this doesn't return what was expected since passing turk.getDescription as an argument 
// to the logReturnVal rewsults in it losing context.

// Q2
// Modify the last program so it works.
// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//       return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   }
// };

// function logReturnVal(func, context) { // provide context as an argument
//   let returnVal = func.call(context); // call func with context as the explicit context
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription, turk) // logs Christpher Turk is a Surgeon.
// if invoke logReturnVal with turk provided as the second argument as context, and pass it to call 
// the code works.
// could also use apply

// Q3
// If we want to extract getDescription from turk but always want to execute with turk as context?

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//       return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   }
// };

// function logReturnVal(func, context) { // provide context as an argument
//   let returnVal = func.call(context); // call func with context as the explicit context
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription, turk)

// // assign a variable and hard bind it to turk
// let getTurkDescription = turk.getDescription.bind(turk);
// logReturnVal(getTurkDescription);

// Q4
// look at the following code:

// const TESGames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ': ' + title);
//     });
//   }
// }

// TESGames.listGames();

// Will this code produce the following output? Why or why not?
// The Elder Scrolls: Arena
// The Elder Scrolls: Daggerfall
// The Elder Scrolls: Morrowind
// The Elder Scrolls: Oblivion
// The Elder Scrolls: Skyrim

// it will not log as expected it logs:
// undefined: Arena
// undefined: Daggerfall
// undefined: Morrowind
// undefined: Oblivion
// undefined: Skyrim

// this is because the seriesTitle has lost context when used as an argument to another function

// Q5
// we can fix this by assigning a self variable to this
// const TESGames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     let self = this;
//     this.titles.forEach(function(title) {
//       console.log(self.seriesTitle + ': ' + title);
//     });
//   }
// }

// TESGames.listGames(); 
// The Elder Scrolls: Arena
// The Elder Scrolls: Daggerfall
// The Elder Scrolls: Morrowind
// The Elder Scrolls: Oblivion
// The Elder Scrolls: Skyrim

// Q6
// the forEach method provides an alternative way to supply the execution context fopr the callback function
// ,modify the last problem using this method

// const TESGames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ': ' + title);
//     }, this);
//   }
// }

// TESGames.listGames(TESGames);

//Q7
// use an arrow funciton to do the same as above:
// const TESGames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(title => {
//       console.log(this.seriesTitle + ': ' + title);
//     });
//   }
// }

// TESGames.listGames();

//Q8
//conside the code:
// let foo = {
//   a: 0,
//   incrementA: function() {
//     function increment() {
//       this.a += 1;
//     }
//     increment();
//   }
// };
// foo.incrementA();
// foo.incrementA();
// foo.incrementA();

// What is the value of foo.a?

// console.log(foo.a) // 0

//it will be zero since a has lost context as it is called as a function. so a is referencing
// the global object.

// Q9
// fix the above code so that foo.a gets incremented with every invocation of incrementA

let foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }
    increment.call(this);
  },
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a) // 3

// We can use call with explicit context. Passing this as the context argument works since inside incrementA
// but outside increment, this references the containing object, foo.