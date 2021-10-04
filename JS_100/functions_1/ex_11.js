// internationalization 2
function localGreet(locale) {
  let language = locale.slice(3, 5);
  switch(language){
  case('US'): return 'Hey!';
  case('GB'): return 'Hello!';
  case('AU'): return 'Howdy!';
  default: return 'unknown language';
}
}
console.log(localGreet('en_US.UTF-8'));
console.log(localGreet('en_GB.UTF-8'));
console.log(localGreet('en_AU.UTF-8'));
console.log(localGreet('en_NZ.UTF-8'));