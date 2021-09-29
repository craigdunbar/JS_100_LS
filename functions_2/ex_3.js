// Greet 3
// extract all to functions

function greet() {
  console.log(`${greeting()}, ${name()}`);
}

function greeting() {
  return 'Good morning';
}

function name() {
  return 'Launch School';
}

greet();