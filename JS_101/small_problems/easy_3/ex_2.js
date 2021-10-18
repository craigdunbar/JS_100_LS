// function logInBox(str) {
//   let length = str.length;
//   console.log("+" + "-".repeat(length + 2) + "+");
//   console.log("|" + " ".repeat(length + 2) + "|");
//   console.log("|" + " " + str +" " + "|");
//   console.log("|" + " ".repeat(length + 2) + "|");
//   console.log("+" + "-".repeat(length + 2) + "+");
// }

// logInBox("To boldly go where no one has gone before.");
// logInBox("");

// Further exploration
// give the box a max length and
// truncate any message that doesn't 
// fit in the box

function logInBox(str, max) {
  let truncatedStr = ''
  let length = str.length
  if ( max < length) {
    truncatedStr = str.slice(0, max);
  }
  console.log("+" + "-".repeat(max + 2) + "+");
  console.log("|" + " ".repeat(max + 2) + "|");
  console.log("|" + " " + truncatedStr + " " + "|");
  console.log("|" + " ".repeat(max + 2) + "|");
  console.log("+" + "-".repeat(max + 2) + "+");
}

logInBox("To boldly go where no one has gone before.", 20);
