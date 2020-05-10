const sieveOfEratosthenes = (n) => {
  //This array will hold values of true or false, originally assigned true on line 6, and then marked false on 14 if they are not prime
  let primes = [];

  for (let i = 0; i <= n; i++) {
    primes[i] = true;
  }
  primes[0] === false;
  primes[1] === false;

  // using square root of the number because anything above it will already be a multiple of something else
  for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let j = 2; j * i <= n; j++) {
      primes[i * j] = false;
    }
  }

  let results = [];

  for (let i = 0; i < primes.length; i++) {
    if (primes[i]) {
      results.push(i);
    }
  }
  return results;
};

console.log(sieveOfEratosthenes(200));
