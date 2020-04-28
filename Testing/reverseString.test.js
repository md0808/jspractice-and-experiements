const reverseString = require("./reverseString");

test("reverse string function exists", () => {
  expect(reverseString).toBeDefined();
});

test("see if string reverses", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

test("see if string reverses with uppercase", () => {
  expect(reverseString("Hello")).toEqual("olleh");
});
