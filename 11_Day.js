function calculateAreaUsingHeronsFormula(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid input: all side lengths must be positive numbers');
    }
  
    const perimeter = a + b + c;
    const semiperimeter = perimeter / 2;
  
    const s = Math.sqrt(semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c));
    return s;
  }
  
  const a = 5;
  const b = 3;
  const c = 4;
  const area = calculateAreaUsingHeronsFormula(a, b, c);
  
  console.log('The area of the triangle is:', area);
  