// We import (require) the function that we want to test.
const insert = require("../exercise-3");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 3", () => {
  expect(
    insert([{ name: "Bob" }, { name: "Josie" }], { isAvailable: false })
  ).toStrictEqual([
    { name: "Bob", isAvailable: false },
    { name: "Josie", isAvailable: false },
  ]);
  // add more tests here...
});

test("Exercise 3", () => {
  expect(
    insert([{ name: "Lena", location: "Mtl"}, { name: "Josie", band: "the pussycats"}], { age: 30 })
  ).toStrictEqual([
    { name: "Lena", location: "Mtl", age: 30},
    { name: "Josie", band: "the pussycats", age: 30},
  ]);
});

test("Exercise 3", () => {
  expect(
    insert([{ name: "Lena", "is-happy": true}, { name: "mopey", "is-happy": false}], {cats: 1, rich: false })
  ).toStrictEqual([
    { name: "Lena", "is-happy": true, cats: 1, rich: false},
    { name: "mopey", "is-happy": false, cats: 1, rich: false},
  ]);
});

test("Exercise 3", () => {
  expect(
    insert([{ name: "Lena"}, { name: "Stimpy"}], {sleepy: true})
  ).toStrictEqual([
    { name: "Lena", sleepy: true},
    { name: "Stimpy", sleepy: true},
  ]);
});
// More info on jest expect: https://jestjs.io/docs/en/expect
