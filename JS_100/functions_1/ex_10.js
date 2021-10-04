// locale part 2
function extractLanguage(locale) {
  let language = locale.slice(3, 5);
  return language
}
console.log(extractLanguage('en_US.UFT-8'));
console.log(extractLanguage('en_GB.UTF-8')); 
console.log(extractLanguage('ko_KR.UTF-16'));