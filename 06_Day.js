//Program to Convert Kilometers to Miles

function convertKmToMiles(kilometers) {
    const conversionFactor = 0.621371;
    const miles = kilometers * conversionFactor;
    return miles;
  }
  const inputKilometers = 10;
  const convertedMiles = convertKmToMiles(inputKilometers);
  console.log(`${inputKilometers} kilometers is equal to ${convertedMiles} miles.`);
  