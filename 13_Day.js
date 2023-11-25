function printPrimeNumbers(lowerLimit, upperLimit) {
    for (let number = lowerLimit; number <= upperLimit; number++) {
      if (isPrime(number)) {
        console.log(number);
      }
    }
  }
  
  function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let divisor = 2; divisor <= number / 2; divisor++) {
      if (number % divisor === 0) {
        return false;
      }
    }
  
    return true;
  }
  

  const lowerLimit = 2;
  const upperLimit = 100;
  
  printPrimeNumbers(lowerLimit, upperLimit);
  