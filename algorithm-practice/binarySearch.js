const binarySearch = (numArray, key) => {
  let sortedArray = numArray.sort(function (a, b) {
    return a - b;
  });
  console.log(numArray);
  let middleIndex = Math.floor(sortedArray.length / 2);
  let middleElem = sortedArray[middleIndex];

  if (middleElem === key) {
    return true;
  } else if (middleElem < key && sortedArray.length > 1) {
    return binarySearch(
      sortedArray.splice(middleIndex, sortedArray.length),
      key
    );
  } else if (middleElem > key && sortedArray.length > 1) {
    return binarySearch(sortedArray.splice(0, middleIndex), key);
  } else {
    return false;
  }
};

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56));
console.log(binarySearch([5, 7, 7112, 16, 36, 39, 42, 56], 56));
console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 4));

//////////////////////////////////

const factorial = (num) => {
  //Base case
  if (num === 1) {
    return num;
  } else {
    return num * factorial(num - 1);
  }
};
