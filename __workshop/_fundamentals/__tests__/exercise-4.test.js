// We import (require) the function that we want to test.
const count = require("../exercise-4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(
    count(
      [
        { name: "Bob", amount: 100 },
        { name: "Josie", amount: 45 },
      ],
      "amount"
    )
  ).toBe(145);
  // add more tests here...
});

test("Exercise 4", () => {
  expect(
    count(
      [
        { name: "Bob", amount: "100" },
        { name: "Josie", amount: 45 },
      ],
      "amount"
    )
  ).toBe(45);
});

test("Exercise 4", () => {
  expect(
    count(
      [
        {name: "Stimpy", cat: true},
        {name: "Ren", cat: false, money: 20},
      ],
      "amount"
    )
  ).toBe(0);
});

test("Exercise 4", () => {
  expect(
    count(
      [
        {amount: 45},
        {amount: 55},
      ],
      "amount"
    )
  ).toBe(100);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
