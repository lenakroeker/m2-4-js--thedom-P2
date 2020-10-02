// We import (require) the function that we want to test.
const addValues = require("../exercise-7");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 7", () => {
  expect(
    addValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      { isAvailable: true }
    )
  ).toStrictEqual([
    { name: "chris", age: 23, isAvailable: true },
    { name: "liv", age: 36, isAvailable: true },
    { name: "dave", age: 43, isAvailable: true },
  ]);
  // add more tests here...
});

test("Exercise 7", () => {
  expect(
    addValues(
      [
        { name: "chris", cats: 3 },
        { name: "liv", cool: true },
        { fname: "dave", age: 43 },
      ],
      { likesSnacks: true }
    )
  ).toStrictEqual([
    { name: "chris", cats: 3, likesSnacks: true },
    { name: "liv", cool: true, likesSnacks: true },
    { fname: "dave", age: 43, likesSnacks: true },
  ]);
});

test("Exercise 7", () => {
  expect(
    addValues(
      [
        { name: "chris", happy: true },
        { cats: 1, name: "Lulu" },
        { fname: "dave", age: 43 },
      ],
      { cats: "always" }
    )
  ).toStrictEqual([
    { name: "chris", happy: true, cats: "always" },
    { cats: 1, name: "Lulu", cats: "always" },
    { fname: "dave", age: 43, cats: "always"},
  ]);
});

test ("Exercise 7", () => {
  expect(
    addValues (
      [
        { name: "pupkins", happy: true },
        { name: "arfy", likes: "digging" },
        { name: "woofy", age: 3 },
      ],
      {says: "woof"}
    )
  ).toStrictEqual([
    { name: "pupkins", happy: true, says: "woof" },
    { name: "arfy", likes: "digging", says: "woof" },
    { name: "woofy", age: 3, says: "woof"},
  ]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
