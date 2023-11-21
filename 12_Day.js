function multiplicationTable(number, range) {
    for (let i = 1; i <= range; i++) {
      console.log(`${number} * ${i} = ${number * i}`);
    }
  }
  
  const inputNumber = parseInt('Enter a number:');
  const inputRange = parseInt('Enter a range:');
  multiplicationTable(inputNumber, inputRange);
  