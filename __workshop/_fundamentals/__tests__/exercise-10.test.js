// We import (require) the function that we want to test.
const uniqueElements = require("../exercise-10");

// Write 3 more expect functions to test the function you just wrote.
// Notice that the expect method is different.
// When verifying equality of arrays and objects, we need to use .toStrictEqual().
test("Exercise 10", () => {
  expect(uniqueElements([1, 4, 0, 3], [1, 3, 4, 5])).toStrictEqual([
    0,
    5,
  ]);
  // add more tests here...
});

test("Exercise 10", () => {
  expect(uniqueElements([], [])).toStrictEqual([

  ]);
});
test("Exercise 10", () => {
  expect(uniqueElements([0, 33, 2, 3], [10, 3, 32, 5, 22, 26])).toStrictEqual([
    0,
    33,
    2,
    10,
    32,
    5,
    22,
    26,
  ]);
});

test("Exercise 10", () => {
  expect(uniqueElements([4, 2, 5, 3], [3, 3, 5, 6])).toStrictEqual([
    4,
    2,
    6,
  ]);
});
// More info on jest expect: https://jestjs.io/docs/en/expect
