// We import (require) the function that we want to test.
const wrapAfter40Chars = require("../exercise-9");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 9", () => {
  expect(
    wrapAfter40Chars(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    )
  ).toBe(
    "Lorem Ipsum is simply dummy text of the \nprinting and typesetting industry. Lorem\nIpsum has been the industry's standard \ndummy text ever since the 1500s, when an\nunknown printer took a galley of type a\nnd scrambled it to make a type specimen \nbook."
  );
  // add more tests here...
});

test("Exercise 9", () => {
  expect(
    wrapAfter40Chars(
      "We carried you in our arms On Independence Day And now you'd throw us all aside And put us on our way Oh, what dear daughter 'neath the sun Would treat a father so To wait upon him hand and foot Yet always answer, no? Tears of rage, tears of grief Why am I the one who must be the thief?"
    )
  ).toBe(
    "We carried you in our arms On Independen\nce Day And now you'd throw us all aside \nAnd put us on our way Oh, what dear daug\nhter 'neath the sun Would treat a father\nso To wait upon him hand and foot Yet a\nlways answer, no? Tears of rage, tears o\nf grief Why am I the one who must be the\nthief?");
  // add more tests here...
});

test("Exercise 9", () => {
  expect(
    wrapAfter40Chars(
      "Hey, Louisiana woman, Mississippi man We get together every time we can The Mississippi River can't keep us apart Theres too much love in the Mississippi heart Too much love in this Louisiana heart"
    )
  ).toBe(
    "Hey, Louisiana woman, Mississippi man We\nget together every time we can The Miss\nissippi River can't keep us apart Theres\ntoo much love in the Mississippi heart \nToo much love in this Louisiana heart");
});

test("Exercise 9", () => {
  expect(
    wrapAfter40Chars(
      "this one is shorter because I got lazy, but it still works as an example! because look 3 lines"
    )
  ).toBe(
    "this one is shorter because I got lazy, \nbut it still works as an example! becaus\ne look 3 lines");
});
// More info on jest expect: https://jestjs.io/docs/en/expect
