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

// logReturnVal(turk.getDescription); // undfined undefined is a undefined

// passing turk.description to the logReturnVal function means that it loses it's context
// When we pass turk.getDescription to logReturnVal as an argument, 
// we remove the method from its context. As a result, 
// when we execute it as func, this points to the global object rather than turk. 
// Since global doesn't have properties defined for firstName, lastName, or occupation, 
// the output isn't what we expect.

// ex2 
// Modify the program from the previous problem so that logReturnVal accepts an additional 
// context argument. If you then run the program with turk as the context argument, 
// it should produce the desired output.

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//       return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   }
// };

// function logReturnVal(func, context) {
//   let returnVal = func.call(context);
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription, turk); //
// By using call to invoke func and passing it the context argument, 
// we can provide the desired context for the function. On line 6, 
// we invoke logReturnVal with turk as the context argument, 
// then pass that value to call; the result is our desired output.

// ex3
// Suppose that we want to extract getDescription from turk, 
// but we always want it to execute with turk as its execution context. 
// How would you modify your code to do that?


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

// logReturnVal(turk.getDescription.bind(turk));

// ex4
// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ': ' + title);
//     });
//   }
// };

// TESgames.listGames();
// Will this code produce the following output? Why or why not?
// The Elder Scrolls: Arena
// The Elder Scrolls: Daggerfall
// The Elder Scrolls: Morrowind
// The Elder Scrolls: Oblivion
// The Elder Scrolls: Skyrim

// code logs 
// undefined: Arena
// undefined: Daggerfall
// undefined: Morrowind
// undefined: Oblivion
// undefined: Skyrim

// Since functions lose their surrounding context when used as arguments to another function, 
// the context of line 6 is not the TESgames object. 
// Instead, it is the global object. 
// Thus, this.seriesTitle resolves to undefined rather than "The Elder Scrolls".

// ex5
// Use let self = this; to ensure that TESgames.listGames uses TESGames 
// as its context and logs the proper output.
// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     let self = this;
//     this.titles.forEach(function(title) {
//       console.log(self.seriesTitle + ': ' + title);
//     });
//   }
// };

// TESgames.listGames();

// ex6
// The forEach method provides an alternative way to supply the execution 
// context for the callback function. Modify the program from the previous 
// problem to use that technique to produce the proper output:

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ': ' + title);
//     }, this);
//   }
// };

// TESgames.listGames();

// ex7


// Use an arrow function to achieve the same result:
// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(title => {
//       console.log(this.seriesTitle + ': ' + title);
//     });
//   }
// };

// TESgames.listGames();
// ex8
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

// What will the value of foo.a be after this code runs?
// a is still 0 at the end as increment is run as a function this will the global object so the a in the foo 
// object is not incremented

// ex9
let foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment.call(this);
  }
};

foo.incrementA();
foo.incrementA();
console.log(foo.incrementA());