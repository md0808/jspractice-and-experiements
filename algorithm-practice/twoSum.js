const twoSum = (numArray, sum) => {
  //  returns every pair of numbers from numArray that adds up to sum
  let numPairs = [];
  // Loop through numArray,
  for (let i = 0; i < numArray.length; i++) {
    let currentNum = numArray[i];
    for (let j = 0; j < numArray.length; j++) {
      if (currentNum + numArray[j] === sum) {
        const pair = [numArray[j], currentNum];
        numPairs.push(pair);
      }
    }
  }
  return numPairs;
};

// console.log(twoSum([2, 4, 5, 6, 1, 2, 1, 4, 8, 3], 9));

const twoSum2 = (numArray, sum) => {
  let pairs = [];
  let hashTable = [];
  for (var i = 0; i < numArray.length; i++) {
    let curNum = numArray[i];
    let counterpart = sum - curNum;
    if (hashTable.indexOf(counterpart) !== -1) {
      const aPair = [curNum, counterpart];
      pairs.push(aPair);
    }

    hashTable.push(curNum);
  }
  return pairs;
};

console.log(twoSum2([2, 4, 5, 6, 1, 2, 1, 4, 8, 3], 9));
console.log(twoSum2([1, 6, 4, 5, 3, 3], 7));
