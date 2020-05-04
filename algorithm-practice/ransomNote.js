const ransomNote = (noteText, magazineText) => {
  let noteArray = noteText.split(" ");
  let magazineArr = magazineText.split(" ");
  let magazineObj = {};
  magazineArr.forEach((word) => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  let noteIsPossible = true;
  noteArray.forEach((word) => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) noteIsPossible = false;
    } else {
      noteIsPossible = false;
    }
  });
  return noteIsPossible;
};

console.log(
  ransomNote(
    "this is all you need in life",
    "this is all the magazine text in the magazine"
  )
);
