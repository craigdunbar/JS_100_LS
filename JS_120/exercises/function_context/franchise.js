// The method franchise.allMovies is supposed to return the following array:
// [
//   'How to Train Your Dragon 1',
//   'How to Train Your Dragon 2',
//   'How to Train Your Dragon 3'
// ]

// Explain why this method will not return the desired object? 
// Try fixing this problem by taking advantage of JavaScript lexical scoping rules.

// this will lose context when it's passed as an argument to the map method.
// to fix this we can assign this to a variable in outer scope and use this variable inside the method

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    let self = this;
    return [1, 2, 3].map(function(number) {
      return self.name + ' ' + number;
    });
  },
};

console.log(franchise.allMovies())