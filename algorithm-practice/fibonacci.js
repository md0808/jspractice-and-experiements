const fibonacci = (position) => {
  if (position === 1 || position === 2) {
    return 1;
  } else return fibonacci(position - 1) + fibonacci(position - 2);
};

console.log(fibonacci(9));
// trying to find the number that is at the the position in the array (+1, because not index.)
