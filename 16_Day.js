//Program to Find the Sum of Natural Numbers (Take input from users)
function sumOfNaturalNumbers(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

let num = 5; // Change this number to the desired value
let result = sumOfNaturalNumbers(num);
console.log(`The sum of natural numbers up to ${num} is: ${result}`);
