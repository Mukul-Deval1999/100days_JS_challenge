//Program to Display the Multiplication Table
function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}

let num = 5;

multiplicationTable(num);
