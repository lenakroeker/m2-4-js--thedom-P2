// We import (require) the function that we want to test.
const isPalindrome = require("../exercise-6");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 6", () => {
  expect(isPalindrome("radar")).toBe(true);
  // add more tests here...
});

test("Exercise 6", () => {
  expect(isPalindrome(343)).toBe(undefined);
});

test("Exercise 6", () => {
  expect(isPalindrome("kitty")).toBe(false);
});

test("Exercise 6", () => {
  expect(isPalindrome("lol")).toBe(true);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
