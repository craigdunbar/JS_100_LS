// Greet 2
// add another default parameter

function greet(greeting = 'Hello', name = 'world') {
  console.log(greeting + ', ' + name + '!');
}
greet('Salutations');
greet()
greet('Good morning', 'Launch School');
