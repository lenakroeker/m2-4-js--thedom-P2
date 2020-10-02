// Exercise 9
// -------------
//
// Write a function that accepts a string and returns the string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after
// every 40 characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".

const wrapAfter40Chars = (paragraph) => {
  // Your code here
  let parray = paragraph.split("");
  let donestr = '';
  parray.forEach((character, index) => {
    if (index !== 0 && character === " " && donestr.charAt(donestr.length - 1) === "\n") {
      return
    }
    donestr += character;
    if ((index + 1) % 40 === 0) {
      donestr += "\n";
    }
  })


  console.log(donestr)
  return donestr;
}

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = wrapAfter40Chars;
