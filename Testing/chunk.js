const chunkArray = (arr, len) => {
  const chunkedArr = [];

  // Loop through arr
  arr.forEach((val) => {
    // Get last element
    //this gets the value at the second to last index of the array
    const last = chunkedArr[chunkedArr.length - 1];

    // Check if last and if last length is equal to the chunk len
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
};

module.exports = chunkArray;
