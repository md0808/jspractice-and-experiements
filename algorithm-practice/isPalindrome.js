const isPalindrome = (string) => {
  string = string.toLowerCase();
  let charArr = string.split("");
  let validChar = "abcdefghijklmnopqrstuvwxyz".split("");

  let lettersArray = [];
  charArr.forEach((char) => {
    if (validChar.indexOf(char) > -1) lettersArray.push(char);
  });

  if (lettersArray.join("") === lettersArray.reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome("racecar"));
