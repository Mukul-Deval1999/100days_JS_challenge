//Program to Convert Celsius to Fahrenheit
function cToF(celsius) {
  
    const fahrenheit = (celsius * 9/5) + 32;
  
    return fahrenheit;
  }
  const inputCelsius = 20;
  const convertedFahrenheit = cToF(inputCelsius);
  console.log(`${inputCelsius} degrees Celsius is equivalent to ${convertedFahrenheit} degrees Fahrenheit.`);
  