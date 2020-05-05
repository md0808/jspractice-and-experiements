const reverseString = (string) => {
  //reverse every word in string and returns string.
  const stringArr = string.split(" ");
  let reverseArr = [];
  for (let i = 0; i < stringArr.length; i++) {
    let splitWord = stringArr[i];
    let index = stringArr.indexOf(splitWord);
    let lowSplitWord = splitWord.toLowerCase();
    let splitWordArray = lowSplitWord.split("");

    let reverseLetterArray = splitWordArray.reverse();
    let reverseWord;
    if (splitWord === splitWord.toUpperCase()) {
      reverseLetterArray[index].toUpperCase();
      reverseWord = reverseLetterArray.join("");
      reverseArr.push(reverseWord);
    } else {
      reverseWord = reverseLetterArray.join("");
      reverseArr.push(reverseWord);
    }
  }

  return reverseArr.join(" ");
};

console.log(reverseString("Hello my name is monica"));

// how to do it without reverse()
// find length of the word
// based on the length of the word, the index numbers change
// recursive function that keeps count of the number of times it has run,

const reverseString2 = (string) => {
  let wordArr = string.split(" ");
  let reverseArr = [];

  wordArr.forEach((word) => {
    var reversedWord = "";
    for (var i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reverseArr.push(reversedWord);
  });
  return reverseArr.join(" ");
};

console.log(reverseString2("what's for dinner"));

function reverseWords(string) {
  var wordsArr = string.split(" ");
  var reversedWordsArr = [];

  wordsArr.forEach((word) => {
    var reversedWord = "";
    for (var i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reversedWordsArr.push(reversedWord);
  });

  return reversedWordsArr.join(" ");
}

reverseWords("Coding JavaScript");
