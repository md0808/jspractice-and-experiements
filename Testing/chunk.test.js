const chunkArray = require("./chunk");

test("function is defined", () => {
  expect(chunkArray).toBeDefined();
});

test("chunk 10 values with a length of 2", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const length = 2;
  const chunkedArr = chunkArray(numbers, length);
  expect(chunkedArr).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ]);
});

test("chunk 10 values with a length of 1", () => {
  const numbers = ["e", "l", "e", "o", "m", "o", "n", "i"];
  const length = 1;
  const chunkedArr = chunkArray(numbers, length);
  expect(chunkedArr).toEqual([
    ["e"],
    ["l"],
    ["e"],
    ["o"],
    ["m"],
    ["o"],
    ["n"],
    ["i"],
  ]);
});
