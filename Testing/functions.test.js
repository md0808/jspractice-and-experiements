const functions = require("./functions");

// beforeEach(() => initDataBase());
// afterEach(() => dataBaseClosed());

// beforeAll(() => initDataBase());
// afterAll(() => dataBaseClosed());

const nameCheck = () => console.log("checking name.. ");

describe("Checking Names", () => {
  beforeEach(() => nameCheck());

  test("User is Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });
  test("User is Joy", () => {
    const user = "Joy";
    expect(user).toBe("Joy");
  });
});

const initDataBase = () => console.log("Database initialized");
const dataBaseClosed = () => console.log("Database closed");

test("adds 2+2 = 4", () => {
  expect(functions.add(2, 2)).toBe("4");
});
test("adds 2+2 to not equal 4", () => {
  expect(functions.add(2, 2)).not.toBe(4);
});
test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});
test("should be falsey", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});
test("should be falsey", () => {
  expect(functions.checkValue(2)).not.toBeFalsy();
});
test("should be falsey", () => {
  expect(functions.checkValue(2)).toBeTruthy();
});

test("should be Monica Dixon object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Monica",
    lastName: "Dixon",
  });
});

test("should be under 1600", () => {
  const loadOne = 800;
  const loadTwo = 700;
  expect(loadOne + loadTwo).toBeLessThanOrEqual(1500);
});

test("There is no i in team", () => {
  expect("team").not.toMatch(/i/);
});

test("admin should be in user name", () => {
  usernames = ["john", "admin", "thomas"];
  expect(usernames).toContain("admin");
});

// test("user fetched name should be Leanne 1", () => {
//   // expect.assertions(1);
//   functions.fetchUser().then((data) => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });

// test("user fetched name should be Leanne 2", async () => {
//   // expect.assertions(1);
//   const data = await functions.fetchUser();
//   expect(data.name).toEqual("Leanne Graham");
// });
