const axios = require("axios");

const functions = {
  add: (num1, num2) => {
    const sum = num1 + num2;
    return sum.toString();
  },

  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = {
      firstName: "Monica",
    };
    user["lastName"] = "Dixon";
    return user;
  },
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.data)
      .catch((err) => "error"),
};

module.exports = functions;
