const getMean = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log("this is th sum: " + sum);
  let mean = sum / arr.length;
  return parseInt(mean.toFixed(2));
};

const getMedian = (arr) => {
  let sortedArray = arr.sort((a, b) => a - b);
  let median;
  if (median % 2 !== 0) {
    median = sortedArray[Math.floor(arr.length / 2)];
    return median;
  } else {
    let midOne = arr[arr.length / 2 - 1];
    let midTow = arr[arr.length / 2];
    let median = (midOne + midTow) / 2;
    return median;
  }
};

const getMode = (arr) => {
  let modeObject = {};
  arr.forEach((num) => {
    if (!modeObject[num]) modeObject[num] = 0;
    modeObject[num]++;
  });
  let maxFrequency = 0;
  let modes = [];
  for (let num in modeObject) {
    if (modeObject[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObject[num];
    } else if (modeObject[num] === maxFrequency) modes.push(modeObject[num]);
  }
  if (modes.length === Object.keys(modeObject).length) {
    modes = [];
  }
  return modes;
};

const meanMedianMode = (arr) => {
  let conclusion = {
    mean: getMean(arr),
    mode: getMode(arr),
    median: getMedian(arr),
  };
  return conclusion;
};

console.log(meanMedianMode([3, 6, 4, 7, 6, 5, 6, 34, 343, 44]));
console.log(meanMedianMode([1, 2, 3, 4, 5, 6, 1]));
