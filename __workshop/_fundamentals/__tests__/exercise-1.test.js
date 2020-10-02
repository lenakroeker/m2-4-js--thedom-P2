// We import (require) the function that we want to test.
const convertToString = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(convertToString([1, 2, 3, 4, 5])).toStrictEqual([
    "1",
    "2",
    "3",
    "4",
    "5",
  ]);
  // add more tests here...
});

test("Exercise 1", () => {
  expect(convertToString([34, 765, 309, 15, 75])).toStrictEqual([
    "34",
    "765",
    "309",
    "15",
    "75",
  ]);
});

test("Exercise 1", () => {
  expect(convertToString([390, 65, 9, 2, 7])).toStrictEqual([
    "390",
    "65",
    "9",
    "2",
    "7",
  ]);
});

test("Exercise 1", () => {
  expect(convertToString([10, 65, 989, 22, 7])).toStrictEqual([
    "10",
    "65",
    "989",
    "22",
    "7",
  ]);
});




// More info on jest expect: https://jestjs.io/docs/en/expect
