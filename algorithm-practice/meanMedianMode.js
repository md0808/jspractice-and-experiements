const getMean = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log("this is th sum: " + sum);
  let mean = sum / arr.length;
  return parseFloat(mean.toFixed(2));
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

// function meanMedianMode(array) {
//   return {
//     mean: getMean(array),
//     median: getMedian(array),
//     mode: getMode(array)
//   }
// }

// function getMean(array) {
//   var sum = 0;

//   array.forEach(num => {
//     sum += num;
//   });

//   var mean = sum / array.length;
//   return mean;
// }

// function getMedian(array) {
//   array.sort(function(a, b){return a-b});
//   var median;

//   if (array.length % 2 !== 0) {
//     median = array[Math.floor(array.length / 2)];
//   }
//   else {
//     var mid1 = array[(array.length / 2) - 1];
//     var mid2 = array[array.length / 2];
//     median = (mid1 + mid2) / 2;
//   }

//   return median;
// }

// function getMode(array) {
//   var modeObj = {};

//   // create modeObj
//   array.forEach(num => {
//     if (!modeObj[num]) modeObj[num] = 0;
//     modeObj[num]++;
//   });

//   // create array of mode/s
//   var maxFrequency = 0;
//   var modes = [];
//   for (var num in modeObj) {
//     if (modeObj[num] > maxFrequency) {
//       modes = [num];
//       maxFrequency = modeObj[num];
//     }
//     else if (modeObj[num] === maxFrequency) modes.push(num);
//   }
//   // if every value appears same amount of times
//   if (modes.length === Object.keys(modeObj).length) modes = [];
//   return modes;
// }

// meanMedianMode([9,10,23,10,23,9]);
