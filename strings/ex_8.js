// blank? version 2
function isBlank(str) {
    let regExp = /[a-zA-Z]/g;
    if(regExp.test(str)) {
        return true
    } else {
        return false
    }
}

// LS solution uses .trim()

function isBlank(str) {
    return str.trim().length === 0;
}

console.log(isBlank('mars'));
console.log(isBlank('  '));
console.log(isBlank(''));