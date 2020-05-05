const caesarCipher = (str, num) => {
  num = num % 26;
  let lowerCaseStr = str.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvqxyz".split("");
  let newString = "";

  for (let i = 0; i < lowerCaseStr.length; i++) {
    let currentLetter = lowerCaseStr[i];
    if (currentLetter === " ") {
      newString += currentLetter;
      continue;
    }
    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + num;
    if (newIndex > 25) {
      newIndex = newIndex - 26;
    }
    if (newIndex < 0) {
      newIndex = 26 + newIndex;
    }
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else newString += alphabet[newIndex];
  }
  return newString;
};

caesarCipher("Zoo Keeper", 2);

console.log(caesarCipher("monica is learning more javascript", 4));
console.log(caesarCipher("zoo keeper", 2));
console.log(caesarCipher("Big Car", -16));
