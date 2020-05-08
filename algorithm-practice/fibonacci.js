const fibonacci = (position) => {
  if (position === 1 || position === 2) {
    return 1;
  } else return fibonacci(position - 1) + fibonacci(position - 2);
};

console.log(fibonacci(9));
// trying to find the number that is at the the position in the array (+1, because not index.)

const memoizedFib = (index, cache) => {
  cache = cache || [];
  if (cache[index]) {
    return cache[index];
  } else {
    if (index < 3) {
      return 1;
    } else {
      cache[index] =
        memoizedFib(index - 1, cache) + memoizedFib(index - 2, cache);
    }
  }
  return cache[index];
};

console.log(memoizedFib(20));

function fibMemo(index, cache) {
  cache = cache || [];
  if (cache[index]) return cache[index];
  else {
    if (index < 3) return 1;
    else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }
  return cache[index];
}

console.log(fibMemo(20));
