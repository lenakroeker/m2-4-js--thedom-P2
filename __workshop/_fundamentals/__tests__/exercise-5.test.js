// We import (require) the function that we want to test.
const addNumbers = require("../exercise-5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(addNumbers(1, 2, 3, 4, 5)).toBe(55);
  // add more tests here...
});

test("Exercise 5", () => {
  expect(addNumbers(1, 10, 10, 10, 5)).toBe(326);
});

test("Exercise 5", () => {
  expect(addNumbers("hello", "meow", "r", "4", "hi")).toBe("undefined");
  // add more tests here...
});

test("Exercise 5", () => {
  expect(addNumbers(10, 10, 1, "4", 10)).toBe(301);
  // add more tests here...
});
// More info on jest expect: https://jestjs.io/docs/en/expect
